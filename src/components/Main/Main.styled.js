import styled from "styled-components";
import { breakpoints } from "../../lib/breakpoints";

const MainContainer = styled.main`
  width: 100%;
  background-color: ${({ theme }) => theme.primaryBgColor};
`;

const MainWrapper = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
`;

const MainBlock = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 25px 0 49px;
`;

const MainContent = styled.div`
  width: 100%;
  display: flex;

  @media screen and (max-width: ${breakpoints.xl}px) {
    display: block;
  }
`;

export { MainContainer, MainWrapper, MainBlock, MainContent };
