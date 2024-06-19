import { Box, TextField, Typography } from "@mui/material";
import styled from "styled-components";
import { theme } from "../../../../../themes/theme";

export const Warpper = styled.div`
  position: relative;
  background-color: #212121;
`;

export const ImageStyled = styled.img`
  height: 90vh;
  width: 100%;
  display: block;
  object-fit: cover;
  opacity: 0.2;
  z-index: 1;
`;

export const ContentWarrper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  background-color: transparent;
  padding: 10px;
  border-radius: 5px;

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
  font-size: 40px;
  text-align: center;
  font-weight: 600;
  background: linear-gradient(to right, #f32170, #ff6b08, #cf23cf, #eedd44);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
`;

export const SubHeading = styled(Typography)`
  color: ${theme.colors.white};
  font-weight: 400;
  font-size: 20px;
  margin-top: 20px;
  text-align: center;
`;



export const SearchSelectedContainer = styled(Box)`
  margin-top: 50px;
`;
