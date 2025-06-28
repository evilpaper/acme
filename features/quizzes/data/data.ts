import { sql } from "@vercel/postgres";
import { Quiz, Question, QuestionChoice } from "./types";

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

export async function getQuizBySlug(slug: string) {
  try {
    const quizData = await sql<Quiz>`
          SELECT
          id,
          name, 
          slug, 
          description
        FROM quizzes
        WHERE slug=${slug} 
      `;
    return quizData.rows;
  } catch (error) {
    console.log("Database error: ", error);
    throw new Error("Failed to fetch all quiz.");
  }
}

export async function getQuestionsByQuizId(quiz_id: string) {
  try {
    const result = await sql<Question & { choice_text: string | null }>`
      SELECT 
        q.id,
        q.quiz_id,
        q.question,
        q.correctanswer,
        q.explanation,
        q.source,
        qc.text as choice_text
      FROM questions q
      LEFT JOIN question_choices qc ON q.id = qc.question_id
      WHERE q.quiz_id = ${quiz_id}
      ORDER BY q.id, qc.id
    `;

    // Group the results by question and collect choices
    const questionsMap = new Map();

    result.rows.forEach((row) => {
      const { choice_text, ...question } = row;

      if (!questionsMap.has(question.id)) {
        questionsMap.set(question.id, {
          ...question,
          options: choice_text ? [choice_text] : [],
        });
      } else if (choice_text) {
        questionsMap.get(question.id).options.push(choice_text);
      }
    });

    return Array.from(questionsMap.values());
  } catch (error) {
    console.log("Database error: ", error);
    throw new Error("Failed to fetch all questions.");
  }
}
