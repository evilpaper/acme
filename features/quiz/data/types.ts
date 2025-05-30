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

export type QuestionChoice = {
  id: string;
  question_id: string;
  text: string;
};

export type QuestionWithOptions = Question & {
  options: string[];
};
