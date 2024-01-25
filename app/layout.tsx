import type { Metadata } from "next";
import "./normalize.css"
import "./globals.css";

export const metadata: Metadata = {
  title: "PalWorld——帕鲁幻兽配置",
  description: "palword 帕鲁幻兽配置",
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
