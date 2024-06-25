import React from "react";
import { Button, Checkbox, FormControlLabel, TextField, Typography } from "@mui/material";

import Link from "next/link";
import { TextFieldStyled, TypographyStyled, BacktoLogin, SignUpContainer, BannerImage, FormContainer, HeaderTypography } from "./SignInPage.styled";
import { CheckBox } from "@mui/icons-material";

const SignInPage = () => {
  const renderForms = () => (
    <>
     
      <TextFieldStyled label="Email" variant="outlined" />
      <TextFieldStyled label="Password" variant="outlined" />
      <TypographyStyled>
      <FormControlLabel required control={<Checkbox />} label="Remember Me"  />
         <BacktoLogin href="/sign-In"> Forget password ?</BacktoLogin>
      </TypographyStyled>
      <Button variant="contained">Sign In</Button>
    </>
  );

  return (
    <SignUpContainer>
      <BannerImage src="/image/auth-banner.png" alt="no img" />
      <FormContainer>
        <HeaderTypography variant="h5">Sign In</HeaderTypography>
        {renderForms()}
        </FormContainer>
    </SignUpContainer>
  );
};

export default SignInPage;
