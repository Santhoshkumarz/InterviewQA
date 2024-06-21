import React from "react";
import {
  FilterSectionWrapper,
  FilterBoxDesktopView,
  FilterHead,
  FilterHeading,
  FilterListHeading,
  FilterList,
  FilterListItem,
} from "./FilterComponent.styled";
import { FilterSectionProps } from "./types";

const FilterSectionComponent: React.FC<FilterSectionProps> = ({
  activeFilter,
  setActiveFilter,
}) => {
  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
  };

  return (
    <FilterSectionWrapper>
      <FilterBoxDesktopView>
        <FilterHead>
          <FilterHeading>All Filters</FilterHeading>
        </FilterHead>
        <div>
          <FilterListHeading>Fresher</FilterListHeading>
          <FilterList>
            <FilterListItem
              active={activeFilter === "All Round"}
              onClick={() => handleFilterClick("All Round")}
            >
              All Round (50 reviews)
            </FilterListItem>
            <FilterListItem
              active={activeFilter === "Round1"}
              onClick={() => handleFilterClick("Round1")}
            >
              Round - 1 Apps (21 reviews)
            </FilterListItem>
            <FilterListItem
              active={activeFilter === "Round2"}
              onClick={() => handleFilterClick("Round2")}
            >
              Round - 2 Coding (15 reviews)
            </FilterListItem>
            <FilterListItem
              active={activeFilter === "Round3"}
              onClick={() => handleFilterClick("Round3")}
            >
              Round - 3 Tech Interview (10 reviews)
            </FilterListItem>
            <FilterListItem
              active={activeFilter === "Round4"}
              onClick={() => handleFilterClick("Round4")}
            >
              Round - 4 HR Interview (8 reviews)
            </FilterListItem>
          </FilterList>
          <FilterListHeading>Salesforce Domain Fresher</FilterListHeading>
          <FilterList>
            {/* Add additional filters for Salesforce Domain Fresher if needed */}
            <h1>Company</h1>
          </FilterList>
        </div>
      </FilterBoxDesktopView>
    </FilterSectionWrapper>
  );
};

export default FilterSectionComponent;
