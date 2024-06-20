import React, { useEffect, useState } from "react";
import {
  HeaderContent,
  MenuContainer,
  LinkStyled,
  Title,
  HeaderWraper,
  MenuIcon,
  MobileMenuContainer,
  MobileMenuItem,
} from "./Header.styled";
import { headerMenus } from "@/config/header";
import { usePathname } from "next/navigation";

const InterviewTitle = "InterviewQA";

interface MenuProps {
  isMobile: boolean;
}

const renderMenus = ({ isMobile }: MenuProps) => {
  return headerMenus?.map((menu, index) => (
    <div key={index}>
      <LinkStyled href={menu.path} isMobile={isMobile}>
        {menu.name}
      </LinkStyled>
    </div>
  ));
};

const Header = () => {
  const pathName = usePathname();
  const [isMobile, setMobile] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [hasBgColor, setHasBgColor] = useState(false);

  const toggleBar = () => {
    setMobile(!isMobile);
  };

  useEffect(() => {
    let lastScrollY = window.pageYOffset;
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      if (pathName === "/") {
        if (currentScrollY > lastScrollY) {
          setScrollDirection("down");
        } else {
          setScrollDirection("up");
        }
        if (currentScrollY > 0) {
          setHasBgColor(true);
        } else {
          setHasBgColor(false);
        }
      }
      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathName]);

  return (
    <>
      <HeaderWraper pathName={pathName} hasBgColor={hasBgColor}>
        <HeaderContent>
          <Title variant="h3">{InterviewTitle}</Title>
        </HeaderContent>
        <MenuContainer>{!isMobile && renderMenus({ isMobile })}</MenuContainer>
        <MenuIcon onClick={toggleBar} />
      </HeaderWraper>
      {isMobile && (
        <MobileMenuContainer>
          {headerMenus?.map((menu, index) => (
            <MobileMenuItem key={index} isMobile={isMobile}>
              <LinkStyled href={menu.path} isMobile={isMobile}>
                {menu.name}
              </LinkStyled>
            </MobileMenuItem>
          ))}
        </MobileMenuContainer>
      )}
    </>
  );
};

export default Header;
