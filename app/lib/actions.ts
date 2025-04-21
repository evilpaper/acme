"use server";

/**
 * action.ts is used to CREATE, UPDATE and DELETE data.
 */

import { z } from "zod";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import bcrypt from "bcrypt";

/**
 * INVOICE
 */

export type InvoiceState = {
  errors?: {
    customerId?: string[];
    amount?: string[];
    status?: string[];
  };
  message?: string | null;
};

const InvoiceFormSchema = z.object({
  id: z.string(),
  customerId: z.string({
    invalid_type_error: "Please select a customer.",
  }),
  amount: z.coerce
    .number()
    .gt(0, { message: "Please enter an amount greater than $0." }),
  status: z.enum(["pending", "paid"], {
    invalid_type_error: "Please select an invoice status.",
  }),
  date: z.string(),
});

const CreateInvoice = InvoiceFormSchema.omit({ id: true, date: true });

export async function createInvoice(
  prevState: InvoiceState,
  formData: FormData,
) {
  // Validate form using Zod
  const validatedFields = CreateInvoice.safeParse({
    customerId: formData.get("customerId"),
    amount: formData.get("amount"),
    status: formData.get("status"),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Invoice.",
    };
  }

  // Prepare data for insertion into the database
  const { customerId, amount, status } = validatedFields.data;
  const amountInCents = amount * 100;
  const date = new Date().toISOString().split("T")[0];

  // Insert data into the database
  try {
    await sql`
      INSERT INTO invoices (customer_id, amount, status, date)
      VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
    `;
  } catch (error) {
    // If a database error occurs, return a more specific error.
    return {
      message: "Database Error: Failed to Create Invoice.",
    };
  }

  // Revalidate the cache for the invoices page and redirect the user.
  revalidatePath("/dashboard/invoices");
  redirect("/dashboard/invoices");
}

const UpdateInvoice = InvoiceFormSchema.omit({ id: true, date: true });

export async function updateInvoice(id: string, formData: FormData) {
  const { customerId, amount, status } = UpdateInvoice.parse({
    customerId: formData.get("customerId"),
    amount: formData.get("amount"),
    status: formData.get("status"),
  });

  const amountInCents = amount * 100;

  try {
    await sql`
    UPDATE invoices
    SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
    WHERE id = ${id}
  `;
  } catch (error) {
    console.log(error);
    return { message: "Database Error: Failed to Update Invoice" };
  }

  revalidatePath("/dashboard/invoices");
  redirect("/dashboard/invoices");
}

export async function deleteInvoice(id: string) {
  try {
    await sql`DELETE FROM invoices WHERE id = ${id}`;
    revalidatePath("/dashboard/invoices");
    return { message: "Deleted Invoice." };
  } catch (error) {
    console.log(error);
    return { message: "Database Error: Failed to Delete Invoice." };
  }
}

/**
 * CUSTOMER
 */

export type CustomerState = {
  errors?: {
    name?: string[];
    email?: string[];
  };
  message?: string | null;
};

const CustomerFormSchema = z.object({
  id: z.string(),
  name: z
    .string({
      invalid_type_error: "Invalid type provided for this field",
      required_error: "This field cannot be blank",
    })
    .min(1),
  email: z
    .string({
      invalid_type_error: "Invalid type provided for this field",
      required_error: "This field cannot be blank",
    })
    .email({ message: "Invalid email address" })
    .min(1),
  image_url: z.string(),
});

// Omit id and image_url at create stage. User don't input them. Instead we add them.
const CreateCustomer = CustomerFormSchema.omit({ id: true, image_url: true });

export async function createCustomer(
  prevState: CustomerState,
  formData: FormData,
) {
  // Validate form using Zod
  const validatedFields = CreateCustomer.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Customer.",
    };
  }

  // Prepare data for insertion into the database
  const { name, email } = validatedFields.data;
  const id = crypto.randomUUID();
  const image_url = "/customers/evil-rabbit.png";

  // Insert data into the database
  try {
    await sql`
      INSERT INTO customers (id, name, email, image_url)
      VALUES (${id}, ${name}, ${email}, ${image_url})
    `;
  } catch {
    // If a database error occurs, return a more specific error.
    return {
      message: "Database Error: Failed to Create Invoice.",
    };
  }

  // Revalidate the cache for the customers page and redirect the user.
  revalidatePath("/dashboard/customers");
  redirect("/dashboard/customers");
  // return { message: null, errors: {} };
}

export async function updateCustomer(id: string, formData: FormData) {
  const { name, email } = CustomerFormSchema.parse({
    name: formData.get("name"),
    email: formData.get("email"),
  });

  try {
    await sql`
      UPDATE customers
      SET name=${name}, email=${email}
      WHERE id=${id}
      `;
  } catch (error) {
    console.log(error);
    return { message: "Databse Error: Failed to Update Customer" };
  }

  revalidatePath("/dashboard/customers");
  redirect("/dashboard/customers");
}

/**
 *
 * AUTHENTICATION
 */

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
}

const RegisterSchema = z.object({
  userEmail: z
    .string({
      invalid_type_error: "Invalid type provided for this field",
      required_error: "This field cannot be blank",
    })
    .email({ message: "Invalid email address" })
    .min(1),
  password: z.string().min(6),
});

export async function register(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    // Validate input
    const validatedFields = RegisterSchema.safeParse({
      userEmail: formData.get("email"),
      password: formData.get("password"),
    });

    if (!validatedFields.success) {
      return "Invalid credentials";
    }

    // Check if user already exist
    const user =
      await sql`SELECT * FROM users WHERE email=${validatedFields.data.userEmail}`;

    if (user.rows[0]) {
      return "User already exist";
    }

    // Prepare data for insertion into the database
    const { userEmail, password } = validatedFields.data;
    const id = crypto.randomUUID();
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert data into the database
    try {
      await sql`
        INSERT INTO users (id, name, email, password)
        VALUES (${id}, User, ${userEmail}, ${hashedPassword})
      `;
      return "Success! User created.";
    } catch (error) {
      return "Database Error: Failed to Create User";
    }
  } catch (error) {
    return "Could not create account.";
  }
}
