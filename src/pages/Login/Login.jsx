import ModalForm from "../../components/ModalForm/ModalForm";
import { AppRoutes } from "../../lib/appRoutes";
import { Link } from "react-router-dom";
import * as S from "./Login.styled";

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

export default function LoginPage({ login }) {
  return (
    <ModalForm
      title="Вход"
      buttonText="Войти"
      buttonAction={login}
      inputs={inputs}
    >
      <S.ModalFormGroup>
        <p>Нужно зарегистрироваться?</p>
        <Link to={AppRoutes.REGISTER}>Регистрируйтесь здесь</Link>
      </S.ModalFormGroup>
    </ModalForm>
  );
}
