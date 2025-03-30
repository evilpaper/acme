import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";

export type Customer = {
  id: string;
  name: string;
  email: string;
  image_url: string;
};

const ITEMS_PER_PAGE = 6;

export async function getCustomer(id: string) {
  try {
    const customer = await sql`SELECT * FROM customers WHERE id=${id}`;
    return customer.rows[0] as Customer;
  } catch (error) {
    console.error("Failed to fetch customer:", error);
    throw new Error("Failed to fetch customer.");
  }
}

export async function getCustomers() {
  try {
    const data = await sql<Customer>`
      SELECT
        id,
        name,
        email,
        image_url
      FROM customers
      ORDER BY name ASC
    `;
    const customers = data.rows;
    return customers;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch all customers.");
  }
}

export async function getCustomerTablePage(query: string, currentPage: number) {
  noStore();
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  try {
    const customers = await sql<Customer>`
          SELECT
            customers.id,
            customers.name,
            customers.email,
            customers.image_url
          FROM customers
          WHERE
            customers.name ILIKE ${`%${query}%`} OR
            customers.email ILIKE ${`%${query}%`}
          ORDER BY customers.name ASC
          LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;
    return customers.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch customers.");
  }
}

export async function getTotalCustomerPages(query: string) {
  noStore();
  try {
    const count = await sql`SELECT COUNT(*)
    FROM customers
    WHERE
      customers.name ILIKE ${`%${query}%`} OR
      customers.email ILIKE ${`%${query}%`}
    `;
    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error("Database error:", error);
    throw new Error("Failed to fetch total number of customer.");
  }
}
