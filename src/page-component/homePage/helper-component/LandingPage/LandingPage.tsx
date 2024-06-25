import React, { useState } from "react";
import { Autocomplete } from "@mui/material";
import { companiesNames } from "@/config/companyNames";
import { Company, SelectedBoxProps } from "./types";
import {
  SearchSelectedContainer,
  CustomTextField,
  ImageStyled,
  TypographyStyled,
  SubHeading,
  ContentWrapper,
  Wrapper,
} from "./LandingPage.styled";
import { useRouter } from "next/navigation";

const title = "Every Review is an Experience!";
const subTitle = "Check questions of the company and read Reviews";

const SelectedBox: React.FC<SelectedBoxProps> = ({
  selectedCompany,
  setSelectedCompany,
}) => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const router = useRouter();

  return (
    <SearchSelectedContainer>
      <Autocomplete
        options={companiesNames}
        getOptionLabel={(option) => option.name}
        value={selectedCompany}
        onChange={(event, newValue) => {
          setSelectedCompany(newValue);
          console.log('newValue',newValue);
          
          if (newValue) {
            router.push(`/interview-company/${newValue.pathName}`);
          }
        }}
        onFocus={() => setIsInputFocused(true)}
        onBlur={() => setIsInputFocused(false)}
        renderInput={(params) => (
          <CustomTextField
            {...params}
            label={
              !selectedCompany && !isInputFocused ? "Select a company" : ""
            }
            variant="outlined"
            fullWidth
            InputLabelProps={{
              shrink: false,
            }}
          />
        )}
        openOnFocus
      />
    </SearchSelectedContainer>
  );
};

const LandingPage: React.FC = () => {
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);

  return (
    <Wrapper>
      <ImageStyled src="/image/homepage.png" alt="Home Page Image" />
      <ContentWrapper>
        <TypographyStyled variant="h2">{title}</TypographyStyled>
        <SubHeading variant="h5">{subTitle}</SubHeading>
        <SelectedBox
          selectedCompany={selectedCompany}
          setSelectedCompany={setSelectedCompany}
        />
      </ContentWrapper>
    </Wrapper>
  );
};

export default LandingPage;
