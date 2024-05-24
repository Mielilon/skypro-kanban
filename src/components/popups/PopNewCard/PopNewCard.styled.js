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
  background-color: ${({ theme }) => theme.secondaryBgColor};
  max-width: 730px;
  width: 100%;
  padding: 40px 30px 48px;
  border-radius: 10px;
  border: 0.7px solid ${({ theme }) => theme.popupBorderColor};
  position: relative;
`;

const PopNewCardContent = styled.div`
  display: block;
  text-align: left;
`;

const PopNewCardTitle = styled.h3`
  color: ${({ theme }) => theme.primaryTextColor};
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 20px;
`;

const PopNewCardClose = styled(Link)`
  position: absolute;
  top: 20px;
  right: 30px;
  color: ${({ theme }) => theme.checkboxControl};
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.primaryTextColor};
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
  color: ${({ theme }) => theme.primaryTextColor};
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
  border: ${({ theme }) => `1px solid ${theme.inputBorderColor}`};
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.primaryTextColor};

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: ${({ theme }) => theme.secondaryTextColor};
    letter-spacing: -0.14px;
  }
`;

const FormNewArea = styled.textarea`
  width: 100%;
  outline: none;
  padding: 14px;
  background: transparent;
  color: ${({ theme }) => theme.primaryTextColor};
  border: ${({ theme }) => `1px solid ${theme.inputBorderColor}`};
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  height: 200px;

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: ${({ theme }) => theme.secondaryTextColor};
    letter-spacing: -0.14px;
  }
`;

const PopNewCardCategories = styled.div`
  margin-bottom: 20px;
`;

const CreateButton = styled.button`
  width: 132px;
  height: 30px;
  background-color: ${({ theme }) => theme.primaryButtonColor};
  border-radius: 4px;
  border: 0;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  color: ${({ theme }) => theme.secondaryButtonColor};
  cursor: pointer;
  float: right;

  &:hover {
    background-color: ${({ theme }) => theme.hoverButtonColor};
  }
`;
const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.errorColor};
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
