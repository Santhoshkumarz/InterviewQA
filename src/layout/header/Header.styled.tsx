import styled from "styled-components";
import { theme } from "../../../themes/theme";
import breakpoints from "../../../themes/breakpoints";
import { Typography } from "@mui/material";

interface CustomProps {
  isMobile?: boolean;
  scrollDirection?: "up" | "down";
  hasBgColor?: boolean;
  hoverColor?: string;
}

export const HeaderWrapper = styled.div<CustomProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${theme.colors.white};
  z-index: 50;
  width: 100%;
  height: 65px;
  position: fixed;
  top: 0;
  left: 0;
  transition: 0.3s;
  background-color: ${({ hasBgColor }) =>
    hasBgColor ? theme.colors.black : "rgba(0, 0, 0, 0.28)"};

  &:hover {
    background-color: ${({ hoverColor }) => hoverColor || theme.colors.black};
  }

  ${breakpoints.xs} {
    padding: 0;
    height: 24px;
  }

  ${breakpoints.md} {
    height: 40px;
  }

  ${breakpoints.lg} {
    height: 47px;
  }

  ${breakpoints.xl} {
    height: 65px;
  }

  /* Example of conditional styling based on scroll direction */
  ${({ scrollDirection }) =>
    scrollDirection === "down" &&
    `
    background-color: ${theme.colors.black};
    transition: background-color 0.3s;
  `}

  ${({ scrollDirection }) =>
    scrollDirection === "up" &&
    `
    background-color: rgba(0, 0, 0, 0.28);
    transition: background-color 0.3s;
  `}
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

export const LinkStyled = styled.a<{ href: string }>`
  color: ${theme.colors.white};
  text-decoration: none;
  position: relative;
  transition: color 0.3s, text-decoration 0.3s;
  &:hover {
    color: ${theme.colors.green};
    text-decoration: underline;
  }
`;

export const Title = styled(Typography)`
  font-size: 35px;
  font-weight: 600;
  color: white;
  background: -webkit-linear-gradient(#eee, #999);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
