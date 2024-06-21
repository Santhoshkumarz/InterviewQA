import { styled } from "styled-components";
import { theme } from "../../../../../themes/theme";

export const FilterSectionWrapper = styled.section`
  width: 25%;
  padding: 20px;
  border-radius: 20px;
`;

export const FilterBoxDesktopView = styled.div`
  background-color: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  border-radius: 10px;
  margin: auto;
  position: fixed;
`;

export const FilterHead = styled.div`
  text-align: center;
  border-bottom: 1px solid #d5dbdb;
`;

export const FilterHeading = styled.h1`
  font-size: 18px;
  margin-block: 10px;
`;

export const FilterListHeading = styled.h1`
  font-size: 16px;
  margin-block: 20px;
`;

export const FilterList = styled.ol`
  list-style-position: inside;
  list-style: none;
`;

export const FilterListItem = styled.li<{ active: boolean }>`
  margin-block: 10px;
  padding: 5px;
  border: 1px solid #d5dbdb;
  cursor: pointer;
  border-radius: 3px;
  width: fit-content;
  font-size: 13px;

  ${({ active }) =>
    active &&
    `
    background-color: ${theme.colors.light};
    color: black;
    border: 1px solid #1c2833;
  `}

  &:hover {
    background-color: ${theme.colors.light};
  }
`;
