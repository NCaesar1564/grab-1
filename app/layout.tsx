import type { Metadata } from "next";
import "./globals.css";
import Header from "./component/layout/Header/Header";
import Footer from "./component/layout/Footer/Footer";
import { ToastContainer } from "react-toastify";

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
    <html lang="en" className="overflow-x-hidden">
      <body className="">
        <Header />
        <ToastContainer position="top-right" autoClose={2000} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
