import Card from "./components/Card/Card";
import Drawer from "./components/Drawer/Drawer";
import Header from "./components/Header";

// Массив объектов
const arr = [
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 12999,
    imgUrl: "./img/sneakers/1.jpg",
  },
  {
    title: "Мужские Кроссовки Nike Air Max 270",
    price: 12999,
    imgUrl: "./img/sneakers/2.jpg",
  },
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 8499,
    imgUrl: "./img/sneakers/3.jpg",
  },
  {
    title: "Кроссовки Puma X Aka Boku Future Rider",
    price: 8499,
    imgUrl: "./img/sneakers/4.jpg",
  },
];

function App() {
  return (
    <div className="wrapper clear">
      {/* Корзина */}
      <Drawer />
      {/* Шапка сайта */}
      <Header />
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
        <div className="d-flex flex-wrap">
          {arr.map((obj) => (
            <Card
              title={obj.title}
              price={obj.price}
              imgUrl={obj.imgUrl}
              onClick={() => console.log(obj)}
            />
          ))}
        </div>
        {/* Конец карточек */}
      </div>
    </div>
  );
}

export default App;
