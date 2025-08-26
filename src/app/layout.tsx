import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";

const nunitoSans = Nunito_Sans({
  subsets: ["cyrillic", "latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Вчитель математики",
  description: "Вивчайте математику на прикладах. Спробуйте свої сили на тестах.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className={nunitoSans.className}>
      <GoogleTagManager gtmId="G-JLM4DLW61J"/>
      <body className="font-normal text-[18px] leading-[24px] text-body-dark">
        <div className="fixed h-full w-full bg-gray-light overflow-auto">
          <div className="w-full" >
            <div className="h-[58px] w-full bg-violet" />
            {children}
          </div>
        </div>        
      </body>
    </html>
  );
}