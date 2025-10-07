"use server";

/**
 * action.ts is used to CREATE, UPDATE and DELETE data.
 */

import { z } from "zod";
import { sql } from "@vercel/postgres";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import bcrypt from "bcrypt";

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
