import ModalForm from "../../components/ModalForm/ModalForm";
import { AppRoutes } from "../../lib/appRoutes";
import { Link, useNavigate } from "react-router-dom";
import * as S from "./Registration.styled";
import { getAppendInputHandler } from "../../utils/getAppendInputHandler";
import { signup } from "../../api/user";
import { useState } from "react";
import useUser from "../../hooks/useUser";

const inputs = [
  {
    type: "text",
    name: "name",
    id: "name",
    placeholder: "Имя",
    ariaLabel: "Имя",
  },
  {
    type: "email",
    name: "login",
    id: "loginReg",
    placeholder: "Эл. почта",
    ariaLabel: "Эл. почта",
  },
  {
    type: "password",
    name: "password",
    id: "passwordFirst",
    placeholder: "Пароль",
    ariaLabel: "Пароль",
  },
];

export default function RegistrationPage() {
  const { login: setUser } = useUser();

  const [registerData, setRegisterData] = useState({
    name: "",
    login: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const register = (e) => {
    e.preventDefault();
    signup(registerData)
      .then((res) => {
        setUser(res.user);
        navigate(AppRoutes.MAIN);
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  return (
    <ModalForm
      title="Регистрация"
      buttonText="Зарегистрироваться"
      inputs={inputs}
      inputHandler={(e) => getAppendInputHandler(e, setRegisterData)}
      buttonAction={register}
      error={error}
    >
      <S.ModalFormGroup>
        <p>
          Уже есть аккаунт? <Link to={AppRoutes.LOGIN}>Войдите здесь</Link>
        </p>
      </S.ModalFormGroup>
    </ModalForm>
  );
}
