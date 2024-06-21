import React, { useState } from "react";
import {
  DesktopViewRightSideAdSection,
  FilterListItem,
  InterviewReviewSection,
  MainContainer,
  Warpper
} from "./InterviewsReviews.styled";
import { styled } from "styled-components";
import Card from "./helper-component/round-cards/RoundCards";
import { ReviewData } from "@/config/reviewsData";
import FilterSectionComponent from "./helper-component/filterComponent/FilterComponent";

const InterviewsReviewsPage = ({ company }: any) => {
  const [activeFilter, setActiveFilter] = useState("All Round");
console.log('company',company);

  const filteredReviews = ReviewData.filter(
    (review) =>
      review.details.company === company?.companyDetails?.pathName &&
      (activeFilter === "All Round" || review.details.round === activeFilter)
  );

  if (!company) {
    return <Warpper className="layout-gap">Company not found.</Warpper>;
  }

  return (
    <Warpper className="layout-gap">
      <MainContainer>
        <FilterSectionComponent
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />

        <InterviewReviewSection className="interviewReview_section">
          <div className="Record_details">
            <h1>{company.name}/{activeFilter}</h1>
            <span>1-10 of {filteredReviews.length} Records</span>
          </div>

          {filteredReviews.map((review) => (
            <Card
              key={review.id}
              profileImg={review.profileImg}
              name={review.details.name}
              company={review.details.company}
              round={review.details.round}
              sharedDate={review.details.sharedDate}
              intro={review.content.intro}
              project={review.content.project}
              tasks={review.content.tasks}
              additionalContent={review.content.additionalContent}
            />
          ))}
        </InterviewReviewSection>

        <DesktopViewRightSideAdSection className="desktopViewRightSideAd_section">
          ADD
        </DesktopViewRightSideAdSection>
      </MainContainer>
    </Warpper>
  );
};

export default InterviewsReviewsPage;
