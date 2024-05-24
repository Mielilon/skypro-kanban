// PopExit.styled.js
import styled from "styled-components";
import { Link } from "react-router-dom";

const PopExitWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-width: 320px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
`;

const PopExitContainer = styled.div`
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

const PopExitBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: ${(props) => props.theme.secondaryBgColor};
  max-width: 370px;
  width: 100%;
  padding: 50px 60px;
  border-radius: 10px;
  border: 0.7px solid ${(props) => props.theme.popupBorderColor};
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
`;

const PopExitTitle = styled.div`
  text-align: center;
  margin-bottom: 20px;

  h2 {
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: -0.4px;
    color: ${(props) => props.theme.primaryTextColor};
  }
`;

const PopExitForm = styled.form`
  width: 100%;
`;

const PopExitFormGroup = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 7px;
`;

const PopExitButtonYes = styled.button`
  width: 153px;
  height: 30px;
  background-color: #565eef;
  border-radius: 4px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color: #ffffff;
  cursor: pointer;

  &:hover {
    background-color: #33399b;
  }
`;

const PopExitButtonNo = styled(Link)`
  width: 153px;
  height: 30px;
  background-color: transparent;
  border-radius: 4px;
  border: 0.7px solid ${(props) => props.theme.invertedTextColor};
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color: ${(props) => props.theme.invertedTextColor};
  text-decoration: none;

  &:hover {
    background-color: ${(props) => props.theme.invertedTextHoverColor};
    color: ${(props) => props.theme.invertedTextColor};
  }
`;

export {
  PopExitWrapper,
  PopExitContainer,
  PopExitBlock,
  PopExitTitle,
  PopExitForm,
  PopExitFormGroup,
  PopExitButtonYes,
  PopExitButtonNo,
};
