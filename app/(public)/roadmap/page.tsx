import { Metadata } from "next";
import RoadmapContent from "./RoadmapContent";

export const metadata: Metadata = {
  title: "Roadmap | N-Keys",
  description: "Explore the N-Keys roadmap with upcoming milestones, platform improvements, and security-focused releases for environment and configuration management teams.",
  openGraph: {
    title: "Roadmap | N-Keys",
    description: "Explore the N-Keys roadmap with upcoming milestones, platform improvements, and security-focused releases for environment and configuration management teams.",
    type: "website",
  },
};

export default function RoadmapPage() {
    return (
        <main>
            <RoadmapContent />
        </main>
    );
}
