import { Navbar } from "../components";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Prasad's Portfolio-(HOME)",
  description: "This is home page of my portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
