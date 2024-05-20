import * as S from "./Column.styled";
import Card from "../Card/Card";

export default function Column({ title, cardList }) {
  return (
    <S.MainColumn>
      <S.ColumnTitle>
        <S.TitleText>{title}</S.TitleText>
      </S.ColumnTitle>
      <S.CardsContainer>
        {cardList.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            topic={card.topic}
            date={card.date}
          />
        ))}
      </S.CardsContainer>
    </S.MainColumn>
  );
}
