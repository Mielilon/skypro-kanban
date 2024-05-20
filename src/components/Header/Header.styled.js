// Header.styled.js
import styled from "styled-components";
import { hover01, hover02, headerUserArrow } from "../Common/Common.styled";

const HeaderContainer = styled.header`
  width: 100%;
  margin: 0 auto;
  background-color: #ffffff;
`;

const HeaderWrapper = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
`;

const HeaderBlock = styled.div`
  height: 70px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 0;
  left: 0;
  padding: 0 10px;
`;

const HeaderLogo = styled.div`
  img {
    width: 85px;
  }
`;

const HeaderNav = styled.nav`
  max-width: 290px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderButton = styled.button`
  width: 178px;
  height: 30px;
  border-radius: 4px;
  background-color: #565eef;
  color: #ffffff;
  border: none;
  font-size: 14px;
  line-height: 1;
  font-weight: 500;
  margin-right: 20px;
  cursor: pointer;
  outline: none;
  ${hover01}
`;

const HeaderUser = styled.span`
  height: 20px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 14px;
  line-height: 20px;
  color: #565eef;
  ${hover02}
  ${headerUserArrow}
`;

export {
  HeaderContainer,
  HeaderWrapper,
  HeaderBlock,
  HeaderLogo,
  HeaderNav,
  HeaderButton,
  HeaderUser,
};