import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import TopPanel from "@/views/common/ui/TopPanel";
import "./globals.css";

const nunitoSans = Nunito_Sans({
  subsets: ["cyrillic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
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
            <TopPanel />
            {children}
          </div>
        </div>        
      </body>
    </html>
  );
}