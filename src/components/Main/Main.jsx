import * as S from "./Main.styled";

export default function Main({ children }) {
  return (
    <S.MainContainer>
      <S.MainWrapper>
        <S.MainBlock>
          <S.MainContent>{children}</S.MainContent>
        </S.MainBlock>
      </S.MainWrapper>
    </S.MainContainer>
  );
}
