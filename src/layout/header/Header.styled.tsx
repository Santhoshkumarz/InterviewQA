import styled from "styled-components";
import { theme } from "../../../themes/theme";
import breakpoints from "../../../themes/breakpoints";
import Link from "next/link";

interface CustomProps {
  isMobile?: boolean;
  scrollDirection?: "up" | "down";
  hasBgColor?: boolean;
}

export const HeaderWraper = styled.div<CustomProps>`
  display: flex;
  justify-content: space-between; // Updated to space-between
  align-items: center;
  color: ${theme.colors.white};
  z-index: 50;
  width: 100%;
  height: 65px;
  position: fixed;
  top: 0;
  left: 0;
  transition: 0.3s;

  ${breakpoints.xs} {
    padding: 0;
    height: 24px;
    background-color: ${({ hasBgColor }) =>
      hasBgColor ? theme.colors.black : "rgba(0, 0, 0, 0.28)"};
  }

  ${breakpoints.md} {
    display: flex;
    width: 100%;
    height: 40px;
  }
  ${breakpoints.lg} {
    height: 47px;
  }
  ${breakpoints.xl} {
    height: 65px;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  padding-left: 90px;
`;

export const MenuContainer = styled.div`
  display: flex;
  gap: 50px;
  padding-right: 100px;
`;


export const LinkStyled = styled(Link)<{ href: string }>`
  color: ${theme.colors.white};
  text-decoration: none;
  position: relative;
  transition: color 0.3s, text-decoration 0.3s;
  &:hover {
    color: ${theme.colors.green};
    text-decoration: underline;
  }

  &:active {
    color: #46d200;
  }
 
`;