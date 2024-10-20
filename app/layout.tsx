import type { Metadata } from "next";
import { Inter, Fira_Code, JetBrains_Mono, Pixelify_Sans, } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
})

const pixelifySans = Pixelify_Sans({
  subsets: ['latin'],
  variable: '--font-pixelify-sans',
  weight: ['400', '500', '600', '700'],
});
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
      <body className={`${jetBrainsMono.variable} ${pixelifySans.variable} antialiased `}>
      <Header />
        {children}
      </body>
    </html>
  );
}
