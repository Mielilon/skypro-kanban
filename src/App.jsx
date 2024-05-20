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
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const logout = (e) => {
    e.preventDefault();
    setUser(null);
    navigate(AppRoutes.LOGIN);
  };

  return (
    <Routes>
      <Route path={AppRoutes.LOGIN} element={<LoginPage setUser={setUser} />} />
      <Route
        path={AppRoutes.REGISTER}
        element={<RegistrationPage setUser={setUser} />}
      />
      <Route element={<PrivateRoute user={user} />}>
        <Route path={AppRoutes.MAIN} element={<MainPage user={user} />}>
          <Route path={AppRoutes.CARD} element={<CardPage />} />
          <Route path={AppRoutes.EXIT} element={<ExitPage logout={logout} />} />
        </Route>
      </Route>
      <Route path={AppRoutes.NOT_FOUND} element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
