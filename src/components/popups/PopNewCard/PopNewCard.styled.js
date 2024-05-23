import { Link } from "react-router-dom";
import styled from "styled-components";

const PopNewCardWrapper = styled.div`
  width: 100%;
  min-width: 375px;
  height: 100%;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 6;
`;

const PopNewCardContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
`;

const PopNewCardBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 730px;
  width: 100%;
  padding: 40px 30px 48px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  position: relative;
`;

const PopNewCardContent = styled.div`
  display: block;
  text-align: left;
`;

const PopNewCardTitle = styled.h3`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 20px;
`;

const PopNewCardClose = styled(Link)`
  position: absolute;
  top: 20px;
  right: 30px;
  color: #94a6be;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: #000000;
  }
`;

const PopNewCardWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const PopNewCardForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
`;

const FormNewBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const SubTitle = styled.label`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 10px;
`;

const FormNewInput = styled.input`
  width: 100%;
  outline: none;
  padding: 14px;
  background: transparent;
  border: ${({ $isError }) =>
    $isError ? "1px solid #F84D4D" : "1px solid rgba(148, 166, 190, 0.4)"};
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  margin-bottom: 20px;

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: ${({ $isError }) => ($isError ? "#F84D4D" : "#94A6BE")};
    letter-spacing: -0.14px;
  }
`;

const FormNewArea = styled.textarea`
  width: 100%;
  outline: none;
  padding: 14px;
  background: transparent;
  border: ${({ $isError }) =>
    $isError ? "1px solid #F84D4D" : "1px solid rgba(148, 166, 190, 0.4)"};
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  height: 200px;

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: ${({ $isError }) => ($isError ? "#F84D4D" : "#94A6BE")};
    letter-spacing: -0.14px;
  }
`;

const PopNewCardCategories = styled.div`
  margin-bottom: 20px;
`;

const CreateButton = styled.button`
  width: 132px;
  height: 30px;
  background-color: #565eef;
  border-radius: 4px;
  border: 0;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  color: #ffffff;
  cursor: pointer;
  float: right;

  &:hover {
    background-color: #33399b;
  }
`;
const ErrorMessage = styled.p`
  color: #f84d4d;
  font-size: 14px;
  margin-top: 10px;
`;

export {
  PopNewCardWrapper,
  PopNewCardContainer,
  PopNewCardBlock,
  PopNewCardContent,
  PopNewCardTitle,
  PopNewCardClose,
  PopNewCardWrap,
  PopNewCardForm,
  FormNewBlock,
  SubTitle,
  FormNewInput,
  FormNewArea,
  ErrorMessage,
  PopNewCardCategories,
  CreateButton,
};
