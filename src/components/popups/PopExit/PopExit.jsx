import { AppRoutes } from "../../../lib/appRoutes";
import * as S from "./PopExit.styled";

export default function PopExit({ logout }) {
  return (
    <S.PopExitWrapper>
      <S.PopExitContainer>
        <S.PopExitBlock>
          <S.PopExitTitle>
            <h2>Выйти из аккаунта?</h2>
          </S.PopExitTitle>
          <S.PopExitFormGroup>
            <S.PopExitButtonYes onClick={logout}>Да, выйти</S.PopExitButtonYes>
            <S.PopExitButtonNo to={AppRoutes.MAIN}>
              Нет, остаться
            </S.PopExitButtonNo>
          </S.PopExitFormGroup>
        </S.PopExitBlock>
      </S.PopExitContainer>
    </S.PopExitWrapper>
  );
}
