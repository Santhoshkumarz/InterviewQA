"use client";
import React from "react";
import LandingPage from "./helper-component/LandingPage/LandingPage";
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
