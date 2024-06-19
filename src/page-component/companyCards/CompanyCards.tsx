import React, { Fragment } from "react";
import {
  CompanyCardsWrapper,
  CompanyCard,
  TitleStyled,
  SubTitleStyled,
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
  return (
    <Fragment>
      {renderTitle()}
      <CompanyCardsWrapper className="layout-gap">
        {companiesNames.map((companyName, index) => (
          <CompanyCard key={index}>{companyName.name}</CompanyCard>
        ))}
      </CompanyCardsWrapper>
    </Fragment>
  );
};

export default CompanyReviewComponent;
