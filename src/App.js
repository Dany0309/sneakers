import React, { useState } from "react";
import axios from "axios";
import Card from "./components/Card/Card";
import Drawer from "./components/Drawer/Drawer";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import AppContext from "./context";
function App() {
  // Добавление карточек в корзину
  const [cartItems, setCartItems] = React.useState([]);
  //Добавление в избранное
  const [favorites, setFavorites] = React.useState([]);
  //Добавление поиска
  const [searchValue, setSearchValue] = React.useState("");
  // Данные из бекенда
  const [items, setItems] = React.useState([]);
  // хук useState для открытия корзины
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  // Отправляем запрос на бекенд через axios
  React.useEffect(() => {
    async function fetchData() {
      // Запрос которые берет все карточки из бэкенда
      const cartResponse = await axios.get(
        "https://31e524490261e853.mokky.dev/cart"
      );
      const favoritesResponse = await axios.get(
        "https://31e524490261e853.mokky.dev/favorites"
      );
      const itemsResponse = await axios.get(
        "https://31e524490261e853.mokky.dev/items"
      );
      setIsLoading(false);
      // Запрос который берет карточки добавленные в корзину
      setCartItems(cartResponse.data);
      setFavorites(favoritesResponse.data);
      setItems(itemsResponse.data);
    }
    fetchData();
  }, []);
  // Запрос завершен
  // Добавление в корзину
  const onAddToCart = (obj) => {
    //Отправка запроса в бекенд для вывода товара в корзину
    if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
      axios.delete(`https://31e524490261e853.mokky.dev/cart/${obj.id}`);
      setCartItems((prev) =>
        prev.filter((item) => Number(item.id) !== Number(obj.id))
      );
    } else {
      axios.post("https://31e524490261e853.mokky.dev/cart", obj);
      setCartItems([...cartItems, obj]);
    }
  };
  //Удаление товара
  const onRemoveItem = (id) => {
    axios.delete(`https://31e524490261e853.mokky.dev/cart/${id}`);
    setCartItems((prev) => prev.filter((obj) => obj.id !== id));
  };
  //Добавление в избранное
  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => favObj.id === obj.id)) {
        axios.delete(`https://31e524490261e853.mokky.dev/favorites/${obj.id}`);
        setFavorites((prev) => prev.filter((item) => item.id !== obj.id));
      } else {
        const { data } = await axios.post(
          "https://31e524490261e853.mokky.dev/favorites",
          obj
        );
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("Не удалось добавить в фавориты");
    }
  };
  //Поиск по товарам через контролируемый input
  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };
  const isItemAdded=(id)=>{
    return cartItems.some((obj)=>Number(obj.id)===Number(id));
  }
  return (
    <AppContext.Provider value={{
      items,
      cartItems,
      favorites,
      isItemAdded,
      setCartOpened
    }} >
      <div className="wrapper clear">
        {/* Корзина */}
        {cartOpened ? (
          <Drawer
            items={cartItems}
            onClose={() => setCartOpened(false)}
            onRemove={onRemoveItem}
          />
        ) : null}
        {/* Шапка сайта */}
        <Header onClickCart={() => setCartOpened(true)} />

        {/* Основная часть */}
        <Routes>
          <Route
            path="/"
            exact
            element={
              <Home
                items={items}
                cartItems={cartItems}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                onChangeSearchInput={onChangeSearchInput}
                onAddToFavorite={onAddToFavorite}
                onAddToCart={onAddToCart}
                isLoading={isLoading}
              />
            }
          ></Route>
        </Routes>
        {/* Избранное страница */}
        <Routes>
          <Route
            path="/favorites"
            exact
            element={
              <Favorites  onAddToFavorite={onAddToFavorite} />
            }
          ></Route>
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
