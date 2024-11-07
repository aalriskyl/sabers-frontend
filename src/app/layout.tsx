import type { Metadata } from "next";
import { Space_Grotesk, Poppins, Epilogue } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: '--font-space-grotesk'
})
const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: '--font-epilogue'
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: "Sabers Indonesia",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${spaceGrotesk.variable} ${epilogue.variable} bg-white m-0 text-black antialiased min-h-screen w-full  overflow-auto`}
      >
        <div className="mx-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
