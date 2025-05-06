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
  correctanswer: string;
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

export async function getQuestionsByQuizId(quiz_id: string) {
  try {
    const questionData = await sql<Question>`
      SELECT 
        id,
        quiz_id,
        question,
        correctanswer,
        explanation,
        source
      FROM questions
      WHERE quiz_id=${quiz_id}
    `;

    const questions = questionData.rows;

    const question_ids = questions.map((question) => question.id);

    console.log("question_ids: ", question_ids);

    const a = [
      "5bc20b1b-3290-4afd-b854-58bc1c390991",
      "6bc20b1b-3290-4afd-b854-58bc1c390992",
    ];

    const b = a.map((id) => `'${id}'`).join(", ");

    console.log("b: ", b);

    /**
     * Workaround: Use a single string and split in SQL (not ideal, but works)
     * Pass a comma-separated string and use string_to_array in SQL.
     */

    const questionIdsString = question_ids.join(",");

    const questionChoicesData = await sql<any>`
      SELECT 
        id,
        question_id,
        text
      FROM question_choices
      WHERE question_id = ANY(string_to_array(${questionIdsString}, ',')::uuid[])
    `;

    const question_choices = questionChoicesData.rows;

    console.log("question_choices", question_choices);

    return questions;
  } catch (error) {
    console.log("Database error: ", error);
    throw new Error("Failed to fetch all questions.");
  }
}
