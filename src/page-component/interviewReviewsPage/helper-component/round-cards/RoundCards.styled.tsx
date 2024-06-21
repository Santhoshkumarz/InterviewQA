// Card.styles.tsx

import styled from "styled-components";
import { theme } from "../../../../../themes/theme";

export const ReviewCard = styled.div`
  margin-top: 20px;
  background-color: ${theme.colors.white};
  width: 100%;
  border-radius: 6px;
  margin-bottom: 20px;
  box-sizing: border-box;
  padding: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #f2f4f4;
  padding: 10px;
`;

export const ProfileImage = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Details = styled.div`
  margin-left: 10px;
`;

export const Title = styled.h1`
  font-size: 17px;
  margin-bottom: 5px;
`;

export const DateText = styled.p`
  font-size: 13px;
`;

export const CardContent = styled.div`
  height: fit-content;
`;


export const CutOffText = styled.div`
  font-size: 15px;
  opacity: 1;
  white-space: pre-wrap;
  word-wrap: break-word;
  max-height: calc(var(--max-line) * 1em * var(--line-height));
  overflow: hidden;
  position: relative;

  ol {
    margin-left: 20px; 
  }

  li {
    margin-bottom: 10px; 
  }
`;

export const ExpandButton = styled.button`
  appearance: none;
  background-color: #2737d9;
  color: ${theme.colors.white};
  border-radius: 3px;
  padding: 5px;
  cursor: pointer;
  font-size: 15px;
  font-weight: bold;
  margin-top: 10px;
  border: none; /* Remove default button border */

  &:hover {
    background-color: #1c2e8b;
  }

`;