import { Box, Typography, Pagination } from "@mui/material";
import styled from "styled-components";
import { theme } from "../../../themes/theme";
import breakpoints from "../../../themes/breakpoints";

export const CompanyCardsWrapper = styled(Box)`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 30px;
`;

export const CompanyCard = styled(Box)`
  height: auto;
  border-radius: 6px;
  margin: 10px;
  padding: 20px;
  cursor: pointer;
  background-color: ${theme.colors.white};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.32) 0px 3px 10px;
  }

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${breakpoints.xs} {
    width: 100%;
  }
  ${breakpoints.md} {
    width: 30%;
  }
  ${breakpoints.lg} {
    width: 31%;
  }
  ${breakpoints.xl} {
    width: 23%;
  }
`;

export const TitleStyled = styled(Typography)`
  color: ${theme.colors.dark};
  font-size: 30px;
  text-align: center;
  font-weight: 600;
  padding-top: 50px;
  ${breakpoints.xs} {
    font-size: 28px;
    font-weight: 600;
  }
`;

export const SubTitleStyled = styled(Typography)`
  color: ${theme.colors.dark};
  text-align: center;
  font-weight: 200;
  padding-top: 20px;
  ${breakpoints.xs} {
    font-size: 19px;
  }
`;

export const CompanyNameStyled = styled(Typography)`
  color: ${theme.colors.navy};
  font-size: 20px;
  text-align: center;

  padding-top: 20px;
  ${breakpoints.xs} {
    font-size: 12px;
    font-weight: 560;
  }
  ${breakpoints.md} {
    font-size: 16px;
  }
  ${breakpoints.lg} {
  font-size: 19px;
  }
`;

export const ImageStyled = styled("img")`
  width: 110px;
  display: block;
  margin: auto;
`;

export const PaginationStyled = styled(Pagination)`
  display: flex;
  justify-content: end;
  padding-top: 30px;

  .MuiPaginationItem-root {
    font-size: 19px;
  }
`;
