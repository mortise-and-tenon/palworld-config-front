import type { Metadata } from "next";
import "./normalize.css"
import "./globals.css";

export const metadata: Metadata = {
  title: "PalWorld——幻兽帕鲁配置",
  description: "palword 幻兽帕鲁配置",
  keywords:"palworld,pal,帕鲁,幻兽,下载,破解,免费,学习,配置,服务器"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
