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

    // We pass the question_ids as a single comma-separated string (questionIdsString).
    // In SQL, we use string_to_array to split the string into an array, then cast it to uuid[].
    // This allows us to use the ANY() operator to match any question_id in the list.
    // This is a workaround for libraries that don't support passing arrays as query parameters.

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

    return questions;
  } catch (error) {
    console.log("Database error: ", error);
    throw new Error("Failed to fetch all questions.");
  }
}
