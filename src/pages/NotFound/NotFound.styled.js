// NotFound.styled.js
import styled from "styled-components";
import { Link } from "react-router-dom";

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background-color: #f1f1f1;
  color: #333;
`;

const NotFoundTitle = styled.h1`
  font-size: 72px;
  margin-bottom: 24px;
  color: #565eef;
`;

const NotFoundSubtitle = styled.h2`
  font-size: 36px;
  margin-bottom: 16px;
  color: #33399b;
`;

const NotFoundText = styled.p`
  font-size: 18px;
  margin-bottom: 32px;
  color: #666;
`;

const BackLink = styled(Link)`
  padding: 10px 20px;
  font-size: 18px;
  color: #ffffff;
  background-color: #565eef;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #33399b;
  }
`;

export {
  NotFoundContainer,
  NotFoundTitle,
  NotFoundSubtitle,
  NotFoundText,
  BackLink,
};
