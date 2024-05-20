import ModalForm from "../../components/ModalForm/ModalForm";
import { AppRoutes } from "../../lib/appRoutes";
import { Link, useNavigate } from "react-router-dom";
import * as S from "./Login.styled";
import { useState } from "react";
import { getAppendInputHandler } from "../../utils/getAppendInputHandler";
import { signin } from "../../api/user";
import useUser from "../../hooks/useUser";

const inputs = [
  {
    type: "email",
    name: "login",
    id: "formlogin",
    placeholder: "Эл. почта",
    ariaLabel: "Эл. почта",
  },
  {
    type: "password",
    name: "password",
    id: "formpassword",
    placeholder: "Пароль",
    ariaLabel: "Пароль",
  },
];

export default function LoginPage() {
  const { login: setUser } = useUser();
  const [loginData, setLoginData] = useState({
    login: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    signin(loginData)
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
      title="Вход"
      buttonText="Войти"
      buttonAction={login}
      inputs={inputs}
      inputHandler={(e) => getAppendInputHandler(e, setLoginData)}
      error={error}
    >
      <S.ModalFormGroup>
        <p>Нужно зарегистрироваться?</p>
        <Link to={AppRoutes.REGISTER}>Регистрируйтесь здесь</Link>
      </S.ModalFormGroup>
    </ModalForm>
  );
}
