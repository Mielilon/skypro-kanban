import { useEffect, useState } from "react";
import { AppRoutes } from "../../../lib/appRoutes";
import Calendar from "../../Calendar/Calendar";
import { useParams, Link } from "react-router-dom";
import { statusList } from "../../../lib/statusList";
import * as S from "./PopBrowse.styled";
import useTasks from "../../../hooks/useTasks";
import { updateTask } from "../../../api/tasks";
import { useNavigate } from "react-router-dom";
import useUser from "../../../hooks/useUser";
import Topic from "../../Topic/Topic";
import CategorySelector from "../../CategorySelector/CategorySelector";

export default function PopBrowse() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { user } = useUser();
  const { tasks, setTasks } = useTasks();
  const [task, setTask] = useState({});
  const [isEdit, setIsEdit] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTask(tasks.find((task) => task._id === id));
  }, [tasks, id]);

  const saveTask = (e) => {
    e.preventDefault();

    if (!task.description || !task.date || !task.status) {
      setError("Пожалуйста, заполните все поля");
      return;
    }

    updateTask({ task, token: user.token })
      .then((res) => {
        setTasks(res.tasks);
        navigate(AppRoutes.MAIN);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <S.PopBrowseContainer id="popBrowse">
      <S.PopBrowseBlock>
        <S.PopBrowseContent>
          <S.PopBrowseTopBlock>
            <S.PopBrowseTitle>{task?.title}</S.PopBrowseTitle>
            {!isEdit && <Topic size={"big"} topic={task?.topic} />}
          </S.PopBrowseTopBlock>
          <div>
            <S.StatusLabel>Статус</S.StatusLabel>
            <S.StatusThemes>
              {isEdit ? (
                statusList.map((status) => (
                  <S.StatusTheme
                    key={status}
                    $isChecked={task.status === status}
                  >
                    <input
                      type="radio"
                      name="status"
                      value={status}
                      checked={task.status === status}
                      onChange={() => setTask({ ...task, status })}
                    />
                    <p>{status}</p>
                  </S.StatusTheme>
                ))
              ) : (
                <S.StatusTheme $isChecked={true}>
                  <p>{task?.status}</p>
                </S.StatusTheme>
              )}
            </S.StatusThemes>
          </div>
          <S.PopBrowseWrap>
            <S.PopBrowseForm id="formBrowseCard" action="#">
              <S.FormBrowseBlock>
                <S.StatusLabel htmlFor="textArea01">
                  Описание задачи
                </S.StatusLabel>

                <S.TextArea
                  name="text"
                  id="textArea01"
                  readOnly={!isEdit}
                  placeholder="Введите описание задачи..."
                  value={task?.description}
                  onChange={(e) =>
                    setTask({ ...task, description: e.target.value })
                  }
                />
              </S.FormBrowseBlock>
            </S.PopBrowseForm>
            <Calendar
              selected={task?.date}
              setSelected={isEdit ? (date) => setTask({ ...task, date }) : null}
            />
          </S.PopBrowseWrap>
          {isEdit && (
            <CategorySelector
              selectedCategory={task.topic}
              onCategoryChange={(elem) => {
                setTask({ ...task, topic: elem });
              }}
            />
          )}

          <S.PopBrowseError>{error}</S.PopBrowseError>
          <S.PopBrowseBtnBrowse>
            <S.BtnGroup>
              {isEdit ? (
                <>
                  <S.BtnBg onClick={saveTask}>Сохранить</S.BtnBg>
                  <S.BtnEdit onClick={() => setIsEdit(false)}>
                    Отменить
                  </S.BtnEdit>
                </>
              ) : (
                <S.BtnEdit onClick={() => setIsEdit(true)}>
                  Редактировать задачу
                </S.BtnEdit>
              )}
              <S.BtnDelete>Удалить задачу</S.BtnDelete>
            </S.BtnGroup>
            <S.BtnClose>
              <Link to={AppRoutes.MAIN}>Закрыть</Link>
            </S.BtnClose>
          </S.PopBrowseBtnBrowse>
        </S.PopBrowseContent>
      </S.PopBrowseBlock>
    </S.PopBrowseContainer>
  );
}
