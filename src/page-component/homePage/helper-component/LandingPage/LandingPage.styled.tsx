import { Box, TextField, Typography } from "@mui/material";
import styled from "styled-components";
import { theme } from "../../../../../themes/theme";
import breakpoints from "../../../../../themes/breakpoints";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #212121;
  min-height: 90vh;
`;

export const ImageStyled = styled.img`
  height: 90vh;
  width: 100%;
  display: block;
  object-fit: cover;
  opacity: 0.2;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  padding: 10px;
  border-radius: 5px;
  margin-top: -45vh;
`;

export const CustomTextField = styled(TextField)`
  color: ${theme.colors.black};
  background-color: ${theme.colors.white};
  border-radius: 10px;

  & .MuiInputBase-input {
    color: ${theme.colors.black};
  }

  & .MuiInputLabel-root {
    color: ${theme.colors.black};
  }

  & .MuiInputLabel-root.Mui-focused {
    color: ${theme.colors.black};
  }

  & .MuiInput-underline:before {
    border-bottom-color: ${theme.colors.black};
  }

  & .MuiInput-underline:after {
    border-bottom-color: ${theme.colors.black};
  }

  & .MuiAutocomplete-popupIndicator {
    color: ${theme.colors.black};
  }
`;

export const TypographyStyled = styled(Typography)`
  color: white;
  text-align: center;
  font-weight: 600;
  background: linear-gradient(to right, #f32170, #ff6b08, #cf23cf, #eedd44);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  ${breakpoints.xs} {
    font-size: 25px;
    margin-top: -60px;
  }
  ${breakpoints.md} {
    font-size: 34px;
  }
  ${breakpoints.lg} {
    font-size: 40px;
  }
`;

export const SubHeading = styled(Typography)`
  color: ${theme.colors.white};
  font-weight: 400;
  margin-top: 20px;
  text-align: center;
  ${breakpoints.xs} {
    font-size: 17px;
  }
  ${breakpoints.lg} {
    font-size: 20px;
  }
`;

export const SearchSelectedContainer = styled(Box)`
  margin-top: 50px;
  width: 95%;
`;
