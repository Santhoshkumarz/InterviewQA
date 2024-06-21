"use client";
import React from "react";

import LandingPage from "./helper-component/companySeletedBox/CompanySelected";
import CompanyReviewComponent from "./helper-component/companyCards/CompanyCards";

const HomePage = () => {
  return (
    <>
      <LandingPage />
      <CompanyReviewComponent />
    </>
  );
};

export default HomePage;
