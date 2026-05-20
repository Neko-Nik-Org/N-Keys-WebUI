import { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact | N-Keys",
  description: "Contact the N-Keys team to discuss secure environment variable and config management across servers, or book a meeting for onboarding and pricing guidance.",
  openGraph: {
    title: "Contact | N-Keys",
    description: "Contact the N-Keys team to discuss secure environment variable and config management across servers, or book a meeting for onboarding and pricing guidance.",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <main>
      <ContactContent />
    </main>
  );
}
