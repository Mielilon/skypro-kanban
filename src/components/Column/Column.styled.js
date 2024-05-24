import styled from "styled-components";
import { breakpoints } from "../../lib/breakpoints";

const MainColumn = styled.div`
  width: 20%;
  margin: 0 auto;
  display: block;

  @media screen and (max-width: ${breakpoints.xl}px) {
    width: 100%;
  }
`;

const ColumnTitle = styled.div`
  padding: 0 10px;
  margin: 15px 0;
`;

const TitleText = styled.p`
  color: ${({ theme }) => theme.secondaryTextColor};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  text-transform: uppercase;
`;

const CardsContainer = styled.div`
  width: 100%;
  display: block;
  position: relative;

  @media screen and (max-width: ${breakpoints.xl}px) {
    display: flex;
    overflow-y: auto;
  }
`;

export { MainColumn, ColumnTitle, TitleText, CardsContainer };
