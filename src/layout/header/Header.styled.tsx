import styled from "styled-components";
import { theme } from "../../../themes/theme";
import breakpoints from "../../../themes/breakpoints";
import { Typography } from "@mui/material";
import DehazeOutlinedIcon from "@mui/icons-material/DehazeOutlined";
import Link from "next/link";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

interface CustomProps {
  isMobile?: boolean;
  hasBgColor?: boolean;
  pathName?: string;
}

export const HeaderWraper = styled.div<CustomProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${theme.colors.white};
  z-index: 50;
  width: 100%;
  height: 55px;
  position: fixed;
  top: 0;
  left: 0;
  transition: 0.3s;
  background-color: ${({ pathName, hasBgColor }) =>
    pathName === "/"
      ? hasBgColor
        ? theme.colors.black
        : "none"
      : theme.colors.black};
  ${breakpoints.xs} {
    padding: 0;
    height: 54px;
  }
  ${breakpoints.md} {
    display: flex;
    width: 100%;
    height: 50px;
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
  ${breakpoints.xs} {
    padding-left: 20px;
  }
  ${breakpoints.md} {
    padding-left: 40px;
  }
`;

export const MenuContainer = styled.div`
  ${breakpoints.xs} {
    display: none;
  }
  ${breakpoints.md} {
    display: flex;
    gap: 30px;
    font-size: 12px;
    padding-right: 20px;
  }
  ${breakpoints.lg} {
    font-size: 16px;
    padding-right: 40px;
  }
  ${breakpoints.xl} {
    font-size: 18px;
    padding-right: 50px;
  }
`;

export const MobileMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 54px;
  width: 100%;
  background-color: ${theme.colors.black};
  padding: 10px 0;
  z-index: 49;
  ${breakpoints.md} {
    display: none;
  }
`;

export const MobileMenuItem = styled.div<{ isMobile: boolean }>`
  padding: 10px 20px;
  background-color: ${({ isMobile }) =>
    isMobile ? theme.colors.white : theme.colors.black};
  border-bottom: 1px solid ${theme.colors.green};
  &:last-child {
    border-bottom: none;
  }
`;

export const LinkStyled = styled(Link)<{ href: string; isMobile: boolean }>`
  color: ${({ isMobile }) =>
    isMobile ? theme.colors.black : theme.colors.white};
  text-decoration: none;
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

  ${breakpoints.xs} {
    font-size: 25px;
    font-weight: 600;
  }
  ${breakpoints.md} {
    font-size: 27px;
    font-weight: 600;
  }
  ${breakpoints.lg} {
    font-size: 30px;
    font-weight: 600;
  }
  ${breakpoints.lg} {
    font-size: 35px;
    font-weight: 600;
  }
`;

export const MenuIcon = styled(DehazeOutlinedIcon)`
  display: none;
  ${breakpoints.xs} {
    display: block;
    position: relative;
    right: 6%;
  }
  ${breakpoints.md} {
    display: none;
  }
`;

export const AvatarContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const AvatarIcon = styled(AccountCircleIcon)`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${theme.colors.dark};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const AvatarMenu = styled.div`
  position: absolute;
  top: 50px;
  right: 0;
  width: 120px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  overflow: hidden;
`;

export const AvatarMenuItem = styled(Link)<{ href: string }>`
  display: block;
  padding: 10px 20px;
  color: #333;
  text-decoration: none;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;

  &:hover {
    background-color: ${theme.colors.green};
    color: white;
  }
`;
