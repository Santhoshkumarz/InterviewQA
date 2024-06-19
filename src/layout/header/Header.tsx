import React from "react";
import { HeaderWraper, HeaderContent, MenuContainer, LinkStyled } from "./Header.styled";
import { headerMenus } from "@/config/header";
import Link from "next/link";

const renderMenus = () => {
  return headerMenus?.map((menu, index) => {
    return (
      <div key={index}>
        <LinkStyled href={menu.path}>{menu.name}</LinkStyled>
      </div>
    );
  });
};

const Header = () => {
  return (
    <HeaderWraper>
      <HeaderContent>
        <h1>InterviewQA</h1>
      </HeaderContent>
      <MenuContainer>
        {renderMenus()}
      </MenuContainer>
    </HeaderWraper>
  );
};

export default Header;
