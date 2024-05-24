import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { AppRoutes } from "./lib/appRoutes";
import AddTaskPage from "./pages/AddTask/AddTask";
import ExitPage from "./pages/Exit/Exit";
import LoginPage from "./pages/Login/Login";
import MainPage from "./pages/Main/Main";
import NotFoundPage from "./pages/NotFound/NotFound";
import RegistrationPage from "./pages/Registration/Registration";
import TaskPage from "./pages/Task/Task";
import { Routes, Route } from "react-router-dom";

export default function AppRouter() {
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
