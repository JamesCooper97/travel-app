import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Adventures Tracker",
  description: "Next JS app created to track my future adventures",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
      
    </html>
  );
}
