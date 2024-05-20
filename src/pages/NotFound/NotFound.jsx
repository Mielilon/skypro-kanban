import * as S from "./NotFound.styled";

export default function NotFoundPage() {
  return (
    <S.NotFoundContainer>
      <S.NotFoundTitle>404</S.NotFoundTitle>
      <S.NotFoundSubtitle>Страница не найдена</S.NotFoundSubtitle>
      <S.BackLink to="/">Go Back to Home</S.BackLink>
    </S.NotFoundContainer>
  );
}
