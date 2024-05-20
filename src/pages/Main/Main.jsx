import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Column from "../../components/Column/Column";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import * as S from "./Main.styled";
import { cardList } from "../../data";

const statusList = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

export default function MainPage() {
  const [cards, setCards] = useState(cardList);

  const addCard = () => {
    const card = {
      id: Math.max(...cards.map((card) => card.id)) + 1,
      topic: "Web Design",
      title: "Название новой задачи",
      date: new Date().toLocaleDateString(),
      status: "Без статуса",
    };
    setCards((prev) => [...prev, card]);
  };

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <S.Wrapper>
      <Outlet />

      <Header addCard={addCard} />
      <Main>
        {isLoading ? (
          <S.Loading>Данные загружаются...</S.Loading>
        ) : (
          statusList.map((status) => (
            <Column
              key={status}
              title={status}
              cardList={cards.filter((card) => card.status === status)}
            />
          ))
        )}
      </Main>
    </S.Wrapper>
  );
}
