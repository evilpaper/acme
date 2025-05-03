import bcrypt from "bcrypt";
import { db } from "@vercel/postgres";
import {
  users,
  quizzes,
  questions,
  question_choices,
} from "../lib/placeholder-data";

const client = await db.connect();

async function seedUsers() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
    CREATE TABLE IF NOT EXISTS users (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL
    );
  `;

  const insertedUsers = await Promise.all(
    users.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      return client.sql`
        INSERT INTO users (id, name, email, password)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
    }),
  );

  return insertedUsers;
}

async function seedQuizzes() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
    CREATE TABLE IF NOT EXISTS quizzes (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      slug TEXT NOT NULL,
      description TEXT NOT NULL
    );
  `;

  const insertedQuizzes = await Promise.all(
    quizzes.map(async (quiz) => {
      return client.sql`
        INSERT INTO quizzes (id, name, slug, description)
        VALUES (${quiz.id}, ${quiz.name}, ${quiz.slug}, ${quiz.description})
        ON CONFLICT (id) DO NOTHING;
      `;
    }),
  );

  return insertedQuizzes;
}

async function seedQuestions() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
    CREATE TABLE IF NOT EXISTS questions (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      quiz_id UUID NOT NULL,
      question TEXT NOT NULL,
      correctanswer TEXT NOT NULL, 
      explanation TEXT NOT NULL,
      source TEXT NOT NULL
    );
  `;

  const insertedQuestions = await Promise.all(
    questions.map((question) => {
      return client.sql`
        INSERT INTO questions (id, quiz_id, question, correctanswer, explanation, source)
        VALUES (${question.id}, ${question.quiz_id}, ${question.question}, ${question.correctanswer}, ${question.explanation}, ${question.source})
        ON CONFLICT (id) DO NOTHING;
      `;
    }),
  );

  return insertedQuestions;
}

async function seedQuestionChoices() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
    CREATE TABLE IF NOT EXISTS question_choices (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      question_id UUID NOT NULL,
      text TEXT NOT NULL
    );
  `;

  const insertedQuestionChoices = await Promise.all(
    question_choices.map((questionChoice) => {
      return client.sql`
        INSERT INTO question_choices (id, question_id, text )
        VALUES (${questionChoice.id}, ${questionChoice.question_id}, ${questionChoice.text})
        ON CONFLICT (id) DO NOTHING;
      `;
    }),
  );

  return insertedQuestionChoices;
}

export async function GET() {
  return Response.json({
    message:
      "Uncomment this file and remove this line. You can delete this file when you are finished.",
  });
  try {
    await client.sql`BEGIN`;
    await seedUsers();
    await seedQuizzes();
    await seedQuestions();
    await seedQuestionChoices();
    await client.sql`COMMIT`;
    return Response.json({ message: "Database seeded successfully" });
  } catch (error) {
    await client.sql`ROLLBACK`;
    return Response.json({ error }, { status: 500 });
  }
}
