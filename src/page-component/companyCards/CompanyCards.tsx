/* eslint-disable @next/next/no-img-element */
import React, { Fragment } from "react";
import {
  CompanyCardsWrapper,
  CompanyCard,
  TitleStyled,
  SubTitleStyled,
  CompanyNameStyled,
  ImageStyled,
  PaginationStyled,
} from "./CompanyCards.styled";
import { companiesNames } from "@/config/companyNames";

const Title = "Top Companies review";
const SubTitle = "You can access top companies review by without any cost.";

const renderTitle = () => {
  return (
    <Fragment>
      <TitleStyled>{Title}</TitleStyled>
      <SubTitleStyled>{SubTitle}</SubTitleStyled>
    </Fragment>
  );
};

const CompanyReviewComponent = () => {
  const [page, setPage] = React.useState(1);
  const itemsPerPage = 8;
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const startIndex = (page - 1) * itemsPerPage;
  const selectedCompanies = companiesNames.slice(startIndex, startIndex + itemsPerPage);

  return (
    <Fragment>
      {renderTitle()}
      <CompanyCardsWrapper className="layout-gap">
        {selectedCompanies.map((companyName, index) => (
          <CompanyCard key={index}>
            <ImageStyled src={companyName.logo} alt="No logo" />
            <CompanyNameStyled>{companyName.name}</CompanyNameStyled>
          </CompanyCard>
        ))}
      </CompanyCardsWrapper>
      <PaginationStyled
        count={Math.ceil(companiesNames.length / itemsPerPage)}
        page={page}
        onChange={handleChange}
        color='standard'
        className="layout-gap"
      />
    </Fragment>
  );
};

export default CompanyReviewComponent;