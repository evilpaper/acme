import { sql } from "@vercel/postgres";

export async function getQuizzes() {
  try {
    const data = await sql<any>`
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
