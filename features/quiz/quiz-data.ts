import { sql } from "@vercel/postgres";

export type Quiz = {
  id: string;
  name: string;
  slug: string;
  description: string;
};

export type Question = {
  id: string;
  quiz_id: string;
  question: string;
  correctAnswer: string;
  explanation: string;
  source: string;
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
    console.error("Database Error: ", err);
    throw new Error("Failed to fetch all quizzes.");
  }
}

export async function getQuestions(id: string) {
  try {
    const data = await sql<Question[]>`
      SELECT 
        id,
        quiz_id,
        question,
        correctanswer,
        explanation,
        source
    FROM questions
    `;
    const questions = data.rows;
    return questions;
  } catch (error) {
    console.log("Database error: ", error);
    throw new Error("Failed to fetch all questions.");
  }
}
