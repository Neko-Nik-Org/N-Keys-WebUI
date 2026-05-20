import { Metadata } from "next";
import PricingContent from "./PricingContent";

export const metadata: Metadata = {
  title: "Pricing | N-Keys",
  description: "Compact usage-based N-Keys pricing calculator with fixed rates and free-tier eligibility.",
  openGraph: {
    title: "Pricing | N-Keys",
    description: "Compact usage-based N-Keys pricing calculator with fixed rates and free-tier eligibility.",
    type: "website",
  },
};

export default function PricingPage() {
    return (
        <main>
            <PricingContent />
        </main>
    );
}
