import React from "react";
import { HeaderContent, MenuContainer, LinkStyled, Title, HeaderWrapper } from "./Header.styled";
import { headerMenus } from "@/config/header";
import Link from "next/link";

const InterviewTitle="InterviewQA"
const renderMenus = () => {
  return headerMenus?.map((menu, index) => {
    return (
      <div key={index}>
        <LinkStyled href={menu.path}>{menu.name}</LinkStyled>
      </div>
    );
  });
};

const Header = ({scrollDirection}:any) => {
  return (
    <HeaderWrapper scrollDirection={scrollDirection}>
      <HeaderContent>
        <Title variant="h3">{InterviewTitle}</Title>
      </HeaderContent>
      <MenuContainer>
        {renderMenus()}
      </MenuContainer>
    </HeaderWrapper>
  );
};

export default Header;
