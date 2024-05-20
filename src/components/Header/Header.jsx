import { useState } from "react";
import * as S from "./Header.styled";
import PopUser from "../popups/PopUser/PopUser";

export default function Header({ addCard }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.HeaderContainer>
      <S.HeaderWrapper>
        <S.HeaderBlock>
          <S.HeaderLogo>
            <img src="images/logo.png" alt="logo" />
          </S.HeaderLogo>
          <S.HeaderNav>
            <S.HeaderButton onClick={addCard}>
              Создать новую задачу
            </S.HeaderButton>
            <S.HeaderUser onClick={() => setIsOpen((prev) => !prev)}>
              Ivan Ivanov
            </S.HeaderUser>
            {isOpen && <PopUser />}
          </S.HeaderNav>
        </S.HeaderBlock>
      </S.HeaderWrapper>
    </S.HeaderContainer>
  );
}
