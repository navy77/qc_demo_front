import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";


// const inter = Inter({ 
//   subsets: ["latin"],
//   weight:["100","200","300","400","500","600","700","800","900"]
//  });
 const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export const metadata: Metadata = {
  title: "QC",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <body className={cn(inter.className,"dark")}>{children}</body> */}
      <body className={cn(poppins.className, "")}>{children}</body>

    </html>
  );
}
