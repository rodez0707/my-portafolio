import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import AnimatedBackground from "@/app/components/ui/AnimatedBackground";
import FloatingNav from "@/app/components/ui/FloatingNav";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

export const metadata: Metadata = {
  title: "Lazaro | Frontend Developer",
  description: "Portafolio de Lazaro, Frontend Developer y Diseñador UX/UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${montserrat.variable} h-full antialiased scroll-smooth`}
    >
      <body className="bg-[#0a0a0f] text-white min-h-screen">
        <AnimatedBackground />
        {children}
        <FloatingNav />
      </body>
    </html>
  );
}
