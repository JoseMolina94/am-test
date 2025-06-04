import type { Metadata } from "next";
import AppLayout from "@/layouts/AppLayout";
import "./globals.css";

export const metadata: Metadata = {
  title: "Am Test app",
  description: "Technical Test App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppLayout>
          {children}
        </AppLayout>
      </body>
    </html>
  );
}
