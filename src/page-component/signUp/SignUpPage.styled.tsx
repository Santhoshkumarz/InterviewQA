import { Box, TextField, Typography } from "@mui/material";
import Link from "next/link";
import { styled } from "styled-components";

export const SignUpContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  align-items: center;
  justify-items: center;
  padding-top: 130px;
`;

export const BannerImage = styled.img`
  width: 600px;
  height: 500px;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const TextFieldStyled = styled(TextField)`
  width: 300px;
  margin-bottom: 20px;
`;
export const TypographyStyled = styled(Typography)`
  font-size: 15px;
`;
export const BacktoLogin = styled(Link)`
  font-size: 16px;
  color: blue;
  font-weight: 600;
`;

export const HeaderTypography = styled(Typography)`
  text-align: center;
  font-weight:600;

`;

export const FormConatiner = styled(Box)``;
