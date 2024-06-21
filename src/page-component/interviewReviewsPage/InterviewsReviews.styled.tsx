import { Box } from "@mui/material";
import styled from "styled-components";

export const Warpper=styled(Box)`
    padding-top:100px;
`

export const MainContainer = styled.main`
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  margin-top: 20px;

  @media (max-width: 600px) {
    margin-top: 0;
  }
`;

export const InterviewReviewSection = styled.section`
  width: 55%;
  box-sizing: border-box;
  padding: 30px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const DesktopViewRightSideAdSection = styled.section`
  width: 20%;
  padding: 30px;
  box-sizing: border-box;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

///


export const FilterListItem = styled.li`
  margin-block: 10px;
  padding: 5px;
  border: 1px solid #d5dbdb;
  cursor: pointer;
  border-radius: 3px;
  width: fit-content;
  font-size: 13px;

  &:hover {
    background-color: #eaeaea;
  }

  &.active_list {
    background-color: #1c2833;
    color: #ffffff;
    border: 1px solid #1c2833;
  }
`;