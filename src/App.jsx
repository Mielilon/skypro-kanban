import "./App.css";
import Column from "./components/Column/Column";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import PopBrowse from "./components/popups/PopBrowse/PopBrowse";
import PopExit from "./components/popups/PopExit/PopExit";
import PopNewCard from "./components/popups/PopNewCard/PopNewCard";

function App() {
  return (
    <div className="wrapper">
      <PopExit />
      <PopBrowse />
      <PopNewCard />

      <Header />
      <Main>
        <Column title="Без статуса" />
        <Column title="Нужно сделать" />
        <Column title="В работе" />
        <Column title="Тестирование" />
        <Column title="Готово" />
      </Main>
    </div>
  );
}

export default App;
