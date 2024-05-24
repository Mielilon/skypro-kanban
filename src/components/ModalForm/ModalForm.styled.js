import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  background-color: ${({ theme }) => theme.primaryBgColor};
`;

const ContainerSignup = styled.div`
  display: block;
  width: 100vw;
  min-height: 100vh;
  margin: 0 auto;
`;

const Modal = styled.div`
  width: 100%;
  height: 100%;
  min-width: 320px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ModalBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.secondaryBgColor};
  max-width: 368px;
  width: 100%;
  padding: 50px 60px;
  border-radius: 10px;
  border: 0.7px solid ${({ theme }) => theme.inputBorderColor};
  box-shadow: 0px 4px 67px -12px ${({ theme }) => theme.shadowColor};
`;

const ModalTitle = styled.div`
  h2 {
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: -0.6px;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.primaryTextColor};
  }
`;

const ModalFormStyled = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ModalLabel = styled.label`
  width: 100%;
`;

const ModalInput = styled.input`
  width: 100%;
  min-width: 100%;
  border-radius: 8px;
  border: ${({ theme }) => `1px solid ${theme.popupBorderColor}`};
  outline: none;
  padding: 10px 8px;
  margin-bottom: 7px;

  &::placeholder {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.28px;
    color: ${({ theme }) => theme.inputPlaceholderColor};
  }
`;

const ModalError = styled.div`
  width: 100%;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  color: ${({ theme }) => theme.errorColor};
`;

const ModalButton = styled.button`
  width: 100%;
  height: 30px;
  background-color: ${({ theme }) => theme.primaryButtonColor};
  border-radius: 4px;
  margin-top: 20px;
  margin-bottom: 20px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color: ${({ theme }) => theme.secondaryButtonColor};

  &:hover {
    background-color: ${({ theme }) => theme.hoverButtonColor};
  }
`;

export {
  Wrapper,
  ContainerSignup,
  Modal,
  ModalBlock,
  ModalTitle,
  ModalFormStyled,
  ModalLabel,
  ModalError,
  ModalInput,
  ModalButton,
};
