import { Metadata } from "next";
import LoginForm from "./LoginForm";

export const metadata: Metadata = {
  title: "Sign In | N-Keys",
  description: "Sign in to your N-Keys dashboard.",
};

export default function LoginPage() {
    return (
        <main className="w-full max-w-md">
            <LoginForm />
        </main>
    );
}
