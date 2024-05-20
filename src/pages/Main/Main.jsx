import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Column from "../../components/Column/Column";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import * as S from "./Main.styled";
import { getTasks } from "../../api/tasks";
import useUser from "../../hooks/useUser";
import useTasks from "../../hooks/useTasks";

const statusList = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

export default function MainPage() {
  const { user } = useUser();
  const { tasks, setTasks } = useTasks();

  const [error, setError] = useState(null);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getTasks({ token: user.token })
      .then((res) => {
        setTasks(res.tasks);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return (
    <S.Wrapper>
      <Outlet />

      <Header user={user} />
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
              taskList={tasks.filter((task) => task.status === status)}
            />
          ))
        )}
      </Main>
    </S.Wrapper>
  );
}
