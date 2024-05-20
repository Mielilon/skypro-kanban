import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/Main/Main";
import NotFoundPage from "./pages/NotFound/NotFound";
import CardPage from "./pages/Card/Card";
import "./App.css";
import ExitPage from "./pages/Exit/Exit";
import LoginPage from "./pages/Login/Login";
import RegistrationPage from "./pages/Registration/Registration";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { AppRoutes } from "./lib/appRoutes";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    setIsAuth(true);
    navigate(AppRoutes.MAIN);
  };

  const logout = (e) => {
    console.log(1);
    e.preventDefault();
    setIsAuth(false);
    navigate(AppRoutes.LOGIN);
  };

  return (
    <Routes>
      <Route path={AppRoutes.LOGIN} element={<LoginPage login={login} />} />
      <Route path={AppRoutes.REGISTER} element={<RegistrationPage />} />
      <Route element={<PrivateRoute isAuth={isAuth} />}>
        <Route path={AppRoutes.MAIN} element={<MainPage />}>
          <Route path={AppRoutes.CARD} element={<CardPage />} />
          <Route path={AppRoutes.EXIT} element={<ExitPage logout={logout} />} />
        </Route>
      </Route>
      <Route path={AppRoutes.NOT_FOUND} element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
