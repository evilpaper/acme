import { sql } from "@vercel/postgres";

export type Quiz = {
  id: string;
  name: string;
  slug: string;
  description: string;
};

export async function getQuizzes() {
  try {
    const data = await sql<Quiz>`
      SELECT
        id,
        name, 
        slug, 
        description
      FROM quizzes
      ORDER BY name ASC
    `;
    const quizzes = data.rows;
    return quizzes;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch all customers.");
  }
}
