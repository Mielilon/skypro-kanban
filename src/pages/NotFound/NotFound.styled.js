import styled from "styled-components";
import { Link } from "react-router-dom";

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background-color: ${({ theme }) => theme.primaryBgColor};
  color: ${({ theme }) => theme.primaryTextColor};
`;

const NotFoundTitle = styled.h1`
  font-size: 72px;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.primaryButtonColor};
`;

const NotFoundSubtitle = styled.h2`
  font-size: 36px;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.hoverButtonColor};
`;

const NotFoundText = styled.p`
  font-size: 18px;
  margin-bottom: 32px;
  color: ${({ theme }) => theme.secondaryTextColor};
`;

const BackLink = styled(Link)`
  padding: 10px 20px;
  font-size: 18px;
  color: ${({ theme }) => theme.secondaryButtonColor};
  background-color: ${({ theme }) => theme.primaryButtonColor};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: ${({ theme }) => theme.hoverButtonColor};
  }
`;

export {
  NotFoundContainer,
  NotFoundTitle,
  NotFoundSubtitle,
  NotFoundText,
  BackLink,
};
