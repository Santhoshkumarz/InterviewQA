"use client";
import React from "react";
import CompanyReviewComponent from "../companyCards/CompanyCards";
import LandingPage from "./helper-component/companySeletedBox/CompanySelected";

const HomePage = () => {
  return (
    <>
      <LandingPage />
      <CompanyReviewComponent />
    </>
  );
};

export default HomePage;
