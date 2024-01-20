import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: "YAAS | Knowledge Share",
  description:
    "Welcome to the Collaborative Teaching Hub – web app empowering educators to collaborate and elevate teaching. Share knowledge, methods, and resources, fostering a vibrant community of learning.",
  icons: {
    icon: '/assets/icons/knowledge-share-logo-icon.svg'
  }
};

export default function RootLayout({
  children, 
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        elements: {
          formButtonPrimary: 'primary-gradient',
          footerActionLink: 'primary-text-gradient hover:text-primary-500'
      }
    }}
    >
      <html lang="en">
        <h1 className="h1-bold">This is a text</h1>
        <body className={`${inter.variable}`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
