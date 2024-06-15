"use client"
import { ReactNode } from "react";
import Header from "./helper-component/header/Header";
import Footer from "./helper-component/footer/Footer";

type LayoutProps = {
  children: ReactNode;
};
const DashboardLayout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Header />
        {children}
      <Footer />
    </div>
  );
};

export default DashboardLayout;
