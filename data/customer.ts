import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';
import { formatCurrency } from '@/lib/utils';

export type Customer = {
  id: string;
  name: string;
  email: string;
  image_url: string;
};

export type CustomerTable = Customer & {
  total_invoices: number;
  total_pending: number;
  total_paid: number;
};

export async function getCustomer(id: string) {
  try {
    const customer = await sql`SELECT * FROM customers WHERE id=${id}`;
    return customer.rows[0] as Customer;
  } catch (error) {
    console.log('Failed to fetch customer:', error);
    throw new Error('Failed to fetch customer.');
  }
}

export async function getCustomerTable(query: string) {
  noStore();
  try {
    const data = await sql<CustomerTable>`
          SELECT
            customers.id,
            customers.name,
            customers.email,
            customers.image_url,
            COUNT(invoices.id) AS total_invoices,
            SUM(CASE WHEN invoices.status = 'pending' THEN invoices.amount ELSE 0 END) AS total_pending,
            SUM(CASE WHEN invoices.status = 'paid' THEN invoices.amount ELSE 0 END) AS total_paid
          FROM customers
          LEFT JOIN invoices ON customers.id = invoices.customer_id
          WHERE
            customers.name ILIKE ${`%${query}%`} OR
          customers.email ILIKE ${`%${query}%`}
          GROUP BY customers.id, customers.name, customers.email, customers.image_url
          ORDER BY customers.name ASC
        `;
    const customers = data.rows.map((customer) => ({
      ...customer,
      total_pending: formatCurrency(customer.total_pending),
      total_paid: formatCurrency(customer.total_paid),
    }));
    return customers;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch customer table.');
  }
}
