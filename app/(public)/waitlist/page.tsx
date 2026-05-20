import { Metadata } from "next";
import WaitlistContent from "./WaitlistContent";

export const metadata: Metadata = {
  title: "Waitlist | N-Keys",
  description: "Join the N-Keys waitlist for secure env var and config sync powered by Rust, Argon2 key protection, CLI/cURL access, and economical pricing for teams.",
  openGraph: {
    title: "Waitlist | N-Keys",
    description: "Join the N-Keys waitlist for secure env var and config sync powered by Rust, Argon2 key protection, CLI/cURL access, and economical pricing for teams.",
    type: "website",
  },
};

export default function WaitlistPage() {
    return (
        <main>
            <WaitlistContent />
        </main>
    );
}
