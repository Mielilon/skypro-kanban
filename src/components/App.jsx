import { useEffect, useState } from "react";
import Column from "./Column/Column";
import Header from "./Header/Header";
import Main from "./Main/Main";
import PopBrowse from "./popups/PopBrowse/PopBrowse";
import PopExit from "./popups/PopExit/PopExit";
import PopNewCard from "./popups/PopNewCard/PopNewCard";
import { cardList } from "../data";
import "./App.css";
import * as S from "./App.styled";

const statusList = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

function App() {
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
      <PopExit />
      <PopBrowse />
      <PopNewCard />

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

export default App;
