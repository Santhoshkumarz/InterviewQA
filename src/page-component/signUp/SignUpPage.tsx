import React from "react";
import { Button, TextField, Typography } from "@mui/material";
import {
  SignUpContainer,
  BannerImage,
  FormContainer,
  TextFieldStyled,
  TypographyStyled,
  BacktoLogin,
  HeaderTypography,
  FormConatiner,
} from "./SignUpPage.styled";
import Link from "next/link";

const SignUpPage = () => {
  const renderForms = () => (
    <>
      <TextFieldStyled label="First Name" variant="outlined" />
      <TextFieldStyled label="Last Name" variant="outlined" />
      <TextFieldStyled label="Email" variant="outlined" />
      <TextFieldStyled label="Password" variant="outlined" />
      <TypographyStyled>
        Already a member? <BacktoLogin href="/sign-In">Log In</BacktoLogin>
      </TypographyStyled>
      <Button variant="contained">Sign Up</Button>
    </>
  );

  return (
    <SignUpContainer>
      <BannerImage src="/image/auth-banner.png" alt="no img" />
      <FormContainer>
        <HeaderTypography variant="h5">Sign UP</HeaderTypography>
        {renderForms()}
        </FormContainer>
    </SignUpContainer>
  );
};

export default SignUpPage;
