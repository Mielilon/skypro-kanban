import * as S from "./Column.styled";
import Card from "../Card/Card";

export default function Column({ title, taskList }) {
  return (
    <S.MainColumn>
      <S.ColumnTitle>
        <S.TitleText>{title}</S.TitleText>
      </S.ColumnTitle>
      <S.CardsContainer>
        {taskList.map((task) => (
          <Card
            key={task._id}
            title={task.title}
            topic={task.topic}
            date={task.date}
            id={task._id}
          />
        ))}
      </S.CardsContainer>
    </S.MainColumn>
  );
}
