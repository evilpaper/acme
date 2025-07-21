export type Card = {
  id: number;
  prompt: string;
  answer: string;
};

export type Deck = {
  id: string;
  suite: string;
  name: string;
  slug: string;
  description: string;
  cards: Card[];
};

// export type Question = {
//   id: string;
//   quiz_id: string;
//   question: string;
//   correctanswer: string;
//   explanation: string;
//   source: string;
// };

// export type QuestionChoice = {
//   id: string;
//   question_id: string;
//   text: string;
// };

// export type QuestionWithOptions = Question & {
//   options: string[];
// };

// export type CardData = QuestionWithOptions & {
//   rotation: number;
// };
