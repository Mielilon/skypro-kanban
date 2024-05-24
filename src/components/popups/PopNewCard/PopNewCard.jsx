import { useState } from "react";
import Calendar from "../../Calendar/Calendar";
import * as S from "./PopNewCard.styled";
import { addTask } from "../../../api/tasks";
import useUser from "../../../hooks/useUser";
import useTasks from "../../../hooks/useTasks";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../../../lib/appRoutes";
import CategorySelector from "../../CategorySelector/CategorySelector";

export default function PopNewCard() {
  const { user } = useUser();
  const { setTasks } = useTasks();

  const navigate = useNavigate();

  const [task, setTask] = useState({
    title: "",
    topic: "Research",
    status: "Без статуса",
    description: "",
    date: null,
  });

  const [error, setError] = useState(null);

  const createTask = (e) => {
    e.preventDefault;

    if (!task.title || !task.description || !task.date) {
      setError("Пожалуйста, заполните все поля");
      return;
    }

    addTask({ task, token: user.token })
      .then((res) => {
        setTasks(res.tasks);
        navigate(AppRoutes.MAIN);
      })
      .catch(() => {
        setError("Что-то пошло не так. Попробуйте еще раз");
      });
  };

  return (
    <S.PopNewCardWrapper id="popNewCard">
      <S.PopNewCardContainer>
        <S.PopNewCardBlock>
          <S.PopNewCardContent>
            <S.PopNewCardTitle>Создание задачи</S.PopNewCardTitle>
            <S.PopNewCardClose to={AppRoutes.MAIN}>✖</S.PopNewCardClose>
            <S.PopNewCardWrap>
              <S.PopNewCardForm id="formNewCard" action="#">
                <S.FormNewBlock>
                  <S.SubTitle htmlFor="formTitle">Название задачи</S.SubTitle>
                  <S.FormNewInput
                    type="text"
                    name="title"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus=""
                    onChange={(e) =>
                      setTask({ ...task, title: e.target.value })
                    }
                  />
                </S.FormNewBlock>
                <S.FormNewBlock>
                  <S.SubTitle htmlFor="textArea">Описание задачи</S.SubTitle>
                  <S.FormNewArea
                    name="text"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                    onChange={(e) =>
                      setTask({ ...task, description: e.target.value })
                    }
                  />
                </S.FormNewBlock>
              </S.PopNewCardForm>
              <Calendar
                selected={task.date}
                setSelected={(date) => setTask({ ...task, date })}
              />
            </S.PopNewCardWrap>
            <CategorySelector
              selectedCategory={task.topic}
              onCategoryChange={(elem) => {
                setTask({ ...task, topic: elem });
              }}
            />
            {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
            <S.CreateButton onClick={createTask}>Создать задачу</S.CreateButton>
          </S.PopNewCardContent>
        </S.PopNewCardBlock>
      </S.PopNewCardContainer>
    </S.PopNewCardWrapper>
  );
}
