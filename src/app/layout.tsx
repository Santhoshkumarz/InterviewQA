import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

import StyledComponentsRegistry from "@/lib/registry";
import { ThemeProvider } from "./theme-provider";
import HomePageLayout from "@/layout/Layout";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Interview QA",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <StyledComponentsRegistry>
          <HomePageLayout>
            <ThemeProvider>
              {children}
              </ThemeProvider>
          </HomePageLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
