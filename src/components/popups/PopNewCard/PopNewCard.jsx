import React, { useState } from "react";
import Calendar from "../../Calendar/Calendar";
import * as S from "./PopNewCard.styled";
import { addTask } from "../../../api/tasks";
import useUser from "../../../hooks/useUser";
import useTasks from "../../../hooks/useTasks";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../../../lib/appRoutes";

const topics = [
  { name: "Web Design", color: "orange" },
  { name: "Research", color: "green" },
  { name: "Copywriting", color: "purple" },
];

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
      .catch((err) => {
        setError("Что-то пошло не так. Попробуйте еще раз");
      });
  };

  return (
    <S.PopNewCardWrapper id="popNewCard">
      <S.PopNewCardContainer>
        <S.PopNewCardBlock>
          <S.PopNewCardContent>
            <S.PopNewCardTitle>Создание задачи</S.PopNewCardTitle>
            <S.PopNewCardClose href="#">✖</S.PopNewCardClose>
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
            <S.PopNewCardCategories>
              <S.CategoriesTitle>Категория</S.CategoriesTitle>
              <S.CategoriesThemes>
                {topics.map((topic) => (
                  <S.CategoryTheme
                    key={topic.name}
                    color={topic.color}
                    checked={task.topic === topic.name}
                  >
                    <input
                      type="radio"
                      name="topic"
                      value={topic.name}
                      checked={task.topic === topic.name}
                      onChange={() => setTask({ ...task, topic: topic.name })}
                    />
                    <p>{topic.name}</p>
                  </S.CategoryTheme>
                ))}
              </S.CategoriesThemes>
            </S.PopNewCardCategories>
            {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
            <S.CreateButton onClick={createTask}>Создать задачу</S.CreateButton>
          </S.PopNewCardContent>
        </S.PopNewCardBlock>
      </S.PopNewCardContainer>
    </S.PopNewCardWrapper>
  );
}
