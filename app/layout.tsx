import type { Metadata } from "next";
import "./globals.css";
import { EB_Garamond } from "next/font/google";


export const metadata: Metadata = {
  title: "Mentor",
  description: "Where newbie connected directly with professional mentor",
};

const ebGaramond = EB_Garamond({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ebGaramond.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
