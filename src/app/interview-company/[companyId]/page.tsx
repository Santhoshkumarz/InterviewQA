"use client";
import { ReviewData } from "@/config/reviewsData";
import InterviewsReviewsPage from "@/page-component/interviewReviewsPage/InterviewsReviewsPage";
import { useParams } from "next/navigation";
import React from "react";

const Page: React.FC = () => {
  const params = useParams();
  const companyName: string = Array.isArray(params?.companyId) ? params.companyId[0] : params.companyId;

  const company = ReviewData.find(
    (company:any) => company.pathName.toLowerCase() === companyName.toLowerCase()
  );

  return (
    <div>
      <InterviewsReviewsPage company={company} />
    </div>
  );
};

export default Page;
