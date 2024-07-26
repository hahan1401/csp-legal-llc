import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CSP Legal LLC ",
  description:
    "CSP Legal LLC (CSP) is a regional law firm with offices in Singapore, Hanoi and Ho Chi Minh City. We advise clients across the region, over a wide range of commercial matters. In particular our lawyers have been actively involved in advising on direct investments in Vietnam since 1994. CSP has international professional skills and knowledge to assist our clients in their investments overseas particularly in Vietnam where we have an outstanding team of lawyers who are able to provide solutions to our client's business and investment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-outer-background`}>
        <div className="max-w-[900px] m-auto bg-inner-background min-h-dvh p-5">
          <Header />
          <div className="px-[30px]">
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
