import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ZapZapp",
  description: "more to som ja zrobil",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
