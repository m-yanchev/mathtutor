import localFont from 'next/font/local'
import { GoogleTagManager } from "@next/third-parties/google";
import TopPanel from "@/views/common/ui/TopPanel";
import "./globals.css";

const local_nunito_sans = localFont({
  src: [{
    path: './fonts/NunitoSans.ttf',
    weight: "300 700",
    style: "normal",
  }, {
    path: './fonts/NunitoSans-Italic.ttf',
    weight: "400",
    style: "italic",
  }],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className={local_nunito_sans.className}>
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