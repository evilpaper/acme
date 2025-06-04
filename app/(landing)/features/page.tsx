import { FeaturesScreen } from "@/features/landing/features-screen";

export const metadata = {
  title: "Features | ACME",
  description:
    "Discover the powerful features of ACME - Learn about our interactive quizzes, real-time feedback, and comprehensive learning tools designed to enhance your knowledge.",
  keywords:
    "ACME features, learning tools, interactive quizzes, educational platform",
  openGraph: {
    title: "Features | ACME",
    description:
      "Discover the powerful features of ACME - Learn about our interactive quizzes, real-time feedback, and comprehensive learning tools designed to enhance your knowledge.",
    type: "website",
  },
};

export default function Page() {
  return <FeaturesScreen />;
}
