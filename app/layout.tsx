import type { Metadata } from "next";
import "./globals.css";
import Header from "./component/layout/Header/Header";
import Footer from "./component/layout/Footer/Footer";

export const metadata: Metadata = {
  title: "Food Grab",
  description: "Welcom to GrabFood",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
