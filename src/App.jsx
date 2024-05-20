import { useEffect, useState } from "react";
import "./App.css";
import Column from "./components/Column/Column";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import PopBrowse from "./components/popups/PopBrowse/PopBrowse";
import PopExit from "./components/popups/PopExit/PopExit";
import PopNewCard from "./components/popups/PopNewCard/PopNewCard";
import { cardList } from "./data";

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
    <div className="wrapper">
      <PopExit />
      <PopBrowse />
      <PopNewCard />

      <Header addCard={addCard} />
      <Main>
        {isLoading ? (
          <div className="loading">Данные загружаются...</div>
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
    </div>
  );
}

export default App;
