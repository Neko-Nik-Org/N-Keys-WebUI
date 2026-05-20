import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "N-Keys",
  description: "Secure Environment Variable Sync",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
