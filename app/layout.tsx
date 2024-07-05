import type { Metadata } from "next";
import { Inter, Fira_Code, } from "next/font/google";
import "./globals.css";

const firaCode = Fira_Code({ subsets: ["latin"] });
// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "g0g0g0",
  description: "a site, for g0g0g0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link href="/favicon.ico" rel="icon" type="image/x-icon" />
      <body className={firaCode.className}>{children}</body>
    </html>
  );
}
