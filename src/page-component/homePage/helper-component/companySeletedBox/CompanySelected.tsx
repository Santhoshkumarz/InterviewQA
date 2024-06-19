"use client";
import React, { useState } from "react";
import { Autocomplete } from "@mui/material";
import { companiesNames } from "@/config/companyNames";
import { Company, SelectedBoxProps } from "./types";
import {
  SearchSelectedContainer,
  CustomTextField,
  Warpper,
  ImageStyled,
  ContentWarrper,
  TypographyStyled,
  SubHeading,
} from "./CompanySelected.styled";

const title = "Every Review is an Experience!";
const subTitle = "Check questions of the company and read Reviews";


const SelectedBox: React.FC<SelectedBoxProps> = ({
  selectedCompany,
  setSelectedCompany,
}) => {
  return (
    <SearchSelectedContainer>
      <Autocomplete
        options={companiesNames}
        getOptionLabel={(option) => option.name}
        value={selectedCompany}
        onChange={(event, newValue) => setSelectedCompany(newValue)}
        renderInput={(params) => (
          <CustomTextField
            {...params}
            label={!selectedCompany ? "Select a company" : ""}
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
    <Warpper>
      <ImageStyled src="/image/homepage.png" alt="Home Page Image" />
      <ContentWarrper>
        <TypographyStyled variant="h2">{title}</TypographyStyled>
        <SubHeading variant="h5">{subTitle}</SubHeading>
        <SelectedBox
          selectedCompany={selectedCompany}
          setSelectedCompany={setSelectedCompany}
        />
      </ContentWarrper>
    </Warpper>
  );
};

export default LandingPage;
