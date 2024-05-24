import styled from "styled-components";
import { Link } from "react-router-dom";

const PopUserWrapper = styled.div`
  position: absolute;
  top: 61px;
  right: 0;
  width: 213px;
  height: 205px;
  border-radius: 10px;
  border: 0.7px solid ${({ theme }) => theme.popupBorderColor};
  background: ${({ theme }) => theme.secondaryBgColor};
  box-shadow: 0px 10px 39px 0px rgba(26, 56, 101, 0.21);
  padding: 34px;
  text-align: center;
  z-index: 2;
`;

const UserName = styled.p`
  color: ${({ theme }) => theme.primaryTextColor};
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 4px;
`;

const UserEmail = styled.p`
  color: ${({ theme }) => theme.secondaryTextColor};
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 10px;
`;

const ThemeToggle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;

  p {
    color: ${({ theme }) => theme.primaryTextColor};
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.14px;
  }

  input[type="checkbox"] {
    position: relative;
    width: 24px;
    height: 13px;
    border-radius: 100px;
    background: #eaeef6;
    outline: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    &::before {
      content: "";
      position: absolute;
      top: 1px;
      left: 1px;
      width: 11px;
      height: 11px;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.checkboxControl};
      transition: 0.5s;
    }

    &:checked::before {
      left: 12px;
    }
  }
`;

const LogoutLink = styled(Link)`
  padding: 8px 14px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.invertedTextColor};
  color: ${({ theme }) => theme.invertedTextColor};
  font-size: 14px;
  line-height: 1;
  font-weight: 500;
  cursor: pointer;
  outline: none;
  &:hover {
    color: ${({ theme }) => theme.invertedTextHoverColor};
    background-color: ${({ theme }) => theme.invertedTextColor};
  }
`;

export { PopUserWrapper, UserName, UserEmail, ThemeToggle, LogoutLink };
