import React, { useEffect, useRef, useState } from "react";
import {
  HeaderContent,
  MenuContainer,
  LinkStyled,
  Title,
  HeaderWraper,
  MenuIcon,
  MobileMenuContainer,
  MobileMenuItem,
  AvatarContainer,
  AvatarIcon,
  AvatarMenu,
  AvatarMenuItem,
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
  const [isAvatarMenuOpen, setIsAvatarMenuOpen] = useState(false);
  const avatarMenuRef = useRef<HTMLDivElement>(null);

  const toggleBar = () => {
    setMobile(!isMobile);
  };

  const toggleAvatarMenu = () => {
    setIsAvatarMenuOpen(!isAvatarMenuOpen);
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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        avatarMenuRef.current &&
        !avatarMenuRef.current.contains(event.target as Node)
      ) {
        setIsAvatarMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <HeaderWraper pathName={pathName} hasBgColor={hasBgColor}>
        <HeaderContent>
          <Title variant="h3">{InterviewTitle}</Title>
        </HeaderContent>
        <MenuContainer>
          {!isMobile && renderMenus({ isMobile })}
          <AvatarContainer ref={avatarMenuRef}>
            <AvatarIcon onClick={toggleAvatarMenu} /> {/* Avatar Icon */}
            {isAvatarMenuOpen && (
              <AvatarMenu>
                <AvatarMenuItem href="/sign-In">Log In</AvatarMenuItem>
                <AvatarMenuItem href="/sign-Up">Sign Up</AvatarMenuItem>
                <AvatarMenuItem href="#">Logout</AvatarMenuItem>
              </AvatarMenu>
            )}
          </AvatarContainer>
        </MenuContainer>
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
