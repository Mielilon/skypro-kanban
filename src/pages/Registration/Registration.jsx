import ModalForm from "../../components/ModalForm/ModalForm";
import { AppRoutes } from "../../lib/appRoutes";
import { Link } from "react-router-dom";
import * as S from "./Registration.styled";

const inputs = [
  {
    type: "text",
    name: "first-name",
    id: "first-name",
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
  return (
    <ModalForm
      title="Регистрация"
      buttonText="Зарегистрироваться"
      inputs={inputs}
    >
      <S.ModalFormGroup>
        <p>
          Уже есть аккаунт? <Link to={AppRoutes.LOGIN}>Войдите здесь</Link>
        </p>
      </S.ModalFormGroup>
    </ModalForm>
  );
}
