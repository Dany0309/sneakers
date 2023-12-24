import React, { useState } from "react";
import Card from "./components/Card/Card";
import Drawer from "./components/Drawer/Drawer";
import Header from "./components/Header";

function App() {
  // Добавление карточек в корзину
  const [cartItems, setCartItems] = React.useState([]);
  // Данные из бекенда
  const [items, setItems] = React.useState([]);
  // хук useState для открытия корзины
  const [cartOpened, setCartOpened] = React.useState(false);

  // Отправляем запрос на бекенд
  React.useEffect(() => {
    fetch("https://31e524490261e853.mokky.dev/items")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      });
  }, []);
  // Запрос завершен
  // Добавление в корзину
  const onAddToCart = (obj) => {
    setCartItems([...cartItems,obj])
  };
  return (
    <div className="wrapper clear">
      {/* Корзина */}
      {cartOpened ? (
        <Drawer items={cartItems} onClose={() => setCartOpened(false)} />
      ) : null}
      {/* Шапка сайта */}
      <Header onClickCart={() => setCartOpened(true)} />
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
          {items.map((obj) => (
            <Card
              title={obj.title}
              price={obj.price}
              imgUrl={obj.imgUrl}
              onFavorite={() => console.log("Добавили в закладки")}
              onPlus={onAddToCart}
            />
          ))}
        </div>
        {/* Конец карточек */}
      </div>
    </div>
  );
}

export default App;
