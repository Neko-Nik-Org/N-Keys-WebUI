import { Metadata } from "next";
import DashboardContent from "./DashboardContent";

export const metadata: Metadata = {
  title: "Overview | Dashboard | N-Keys",
};

export default function DashboardPage() {
    return (
        <DashboardContent />
    );
}
