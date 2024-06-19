"use client"
import { ReactNode } from "react";
import Header from "./header/Header";

type LayoutProps = {
  children: ReactNode;
};
const HomePageLayout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Header />
        {children}
      {/* <Footer /> */}
    </div>
  );
};

export default HomePageLayout;
