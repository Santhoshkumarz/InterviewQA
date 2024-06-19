import { Box, Typography } from "@mui/material";
import styled from "styled-components";
import { theme } from "../../../themes/theme";

export const CompanyCardsWrapper = styled(Box)`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  padding-top:30px;
`;

export const CompanyCard = styled(Box)`
  width: 23%;
  height: 150px;
  border-radius: 6px;
  margin: 10px;
  padding: 20px 20px;
  cursor: pointer;
  background-color: ${theme.colors.white};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

   &:hover {
    box-shadow: rgba(0, 0, 0, 0.32) 0px 3px 10px;
  }
`;

export const TitleStyled = styled(Typography)`
  color: ${theme.colors.dark};
  font-size: 30px;
  text-align: center;
  font-weight: 600;
  padding-top: 50px;
`;

export const SubTitleStyled = styled(Typography)`
  color: ${theme.colors.dark};
  font-size: 20px;
  text-align: center;
  font-weight: 200;
  padding-top: 20px;
`;