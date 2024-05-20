import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/Main/Main";
import NotFoundPage from "./pages/NotFound/NotFound";
import "./App.css";
import ExitPage from "./pages/Exit/Exit";
import LoginPage from "./pages/Login/Login";
import RegistrationPage from "./pages/Registration/Registration";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { AppRoutes } from "./lib/appRoutes";
import TaskPage from "./pages/Task/Task";
import AddTaskPage from "./pages/AddTask/AddTask";

function App() {
  return (
    <Routes>
      <Route path={AppRoutes.LOGIN} element={<LoginPage />} />
      <Route path={AppRoutes.REGISTER} element={<RegistrationPage />} />
      <Route element={<PrivateRoute />}>
        <Route path={AppRoutes.MAIN} element={<MainPage />}>
          <Route path={AppRoutes.ADD_TASK} element={<AddTaskPage />} />
          <Route path={AppRoutes.TASK} element={<TaskPage />} />
          <Route path={AppRoutes.EXIT} element={<ExitPage />} />
        </Route>
      </Route>
      <Route path={AppRoutes.NOT_FOUND} element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
