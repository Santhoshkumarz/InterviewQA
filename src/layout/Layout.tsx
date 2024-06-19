"use client"
import { ReactNode, useEffect, useState } from "react";
import Header from "./header/Header";

type LayoutProps = {
  children: ReactNode;
};
const HomePageLayout = ({ children }: LayoutProps) => {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");

  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      lastScrollTop = st <= 0 ? 0 : st; 
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Header scrollDirection={scrollDirection}/>
        {children}
      {/* <Footer /> */}
    </div>
  );
};

export default HomePageLayout;
