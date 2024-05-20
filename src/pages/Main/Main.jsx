import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Column from "../../components/Column/Column";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import * as S from "./Main.styled";
import { getTasks } from "../../api/tasks";

const statusList = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

export default function MainPage({ user }) {
  const [cards, setCards] = useState([]);

  const [error, setError] = useState(null);

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
    getTasks({ token: user.token })
      .then((res) => {
        setCards(res.tasks);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return (
    <S.Wrapper>
      <Outlet />

      <Header addCard={addCard} user={user} />
      <Main>
        {isLoading ? (
          <S.Loading>Данные загружаются...</S.Loading>
        ) : error ? (
          <S.Error>{error}</S.Error>
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
