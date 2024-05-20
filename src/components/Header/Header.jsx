import { useState } from "react";
import * as S from "./Header.styled";
import PopUser from "../popups/PopUser/PopUser";
import { AppRoutes } from "../../lib/appRoutes";

export default function Header({ user }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.HeaderContainer>
      <S.HeaderWrapper>
        <S.HeaderBlock>
          <S.HeaderLogo>
            <img src="images/logo.png" alt="logo" />
          </S.HeaderLogo>
          <S.HeaderNav>
            <S.HeaderButton to={AppRoutes.ADD_TASK}>
              Создать новую задачу
            </S.HeaderButton>
            <S.HeaderUser onClick={() => setIsOpen((prev) => !prev)}>
              {user.name}
            </S.HeaderUser>
            {isOpen && <PopUser />}
          </S.HeaderNav>
        </S.HeaderBlock>
      </S.HeaderWrapper>
    </S.HeaderContainer>
  );
}
