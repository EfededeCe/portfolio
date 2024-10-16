import localFont from "next/font/local";
import "./globals.css";
import { NavBar } from "@/ui/components/NavBar";
import { Footer } from "@/ui/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Full Stack - Federico del Corro",
  description:
    "Portfolio de Federico del Corro, desarrollador web Full Stack, con JavaScript, React, Next.JS, Node.JS, Express, Python, Django Rest Framework",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="forest" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:20px_20px]`}
      >
        <NavBar />
        {children}

        <Footer />
        {/* <div class="relative h-full w-full bg-black">
          <div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          <div class="absolute z-0 left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
        </div> */}
      </body>
    </html>
  );
}
