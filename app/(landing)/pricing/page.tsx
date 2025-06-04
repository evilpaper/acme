import { PricingScreen } from "@/features/landing/pricing-screen";

export const metadata = {
  title: "Pricing | ACME",
  description:
    "Explore ACME's flexible pricing plans - Choose the perfect plan for your learning journey with our transparent and competitive pricing options.",
  keywords:
    "ACME pricing, subscription plans, learning platform cost, educational pricing",
  openGraph: {
    title: "Pricing | ACME",
    description:
      "Explore ACME's flexible pricing plans - Choose the perfect plan for your learning journey with our transparent and competitive pricing options.",
    type: "website",
  },
};

export default function Page() {
  return <PricingScreen />;
}
