import { AppRoutes } from "../../../lib/appRoutes";
import * as S from "./PopUser.styled";

export default function PopUser() {
  return (
    <S.PopUserWrapper>
      <S.UserName>Ivan Ivanov</S.UserName>
      <S.UserEmail>ivan.ivanov@gmail.com</S.UserEmail>
      <S.ThemeToggle>
        <p>Темная тема</p>
        <input type="checkbox" className="checkbox" name="checkbox" />
      </S.ThemeToggle>
      <S.LogoutLink to={AppRoutes.EXIT}>Выйти</S.LogoutLink>
    </S.PopUserWrapper>
  );
}
