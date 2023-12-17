import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

function App() {
  return (
    <div className="wrapper clear">
      {/* Корзина */}
      <Drawer/>
      {/* Шапка сайта */}
      <Header/>
      {/* Основная часть */}
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          {/* Поиск */}
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>
        {/* Карточки */}
        <div className="d-flex">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          

          
        </div>
        {/* Конец карточек */}
      </div>
    </div>
  );
}

export default App;
