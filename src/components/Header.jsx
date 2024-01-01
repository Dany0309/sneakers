import { NavLink } from "react-router-dom";
const Header = (props) => {
  return (
    <header className="d-flex justify-between align-center p-40">
      <NavLink to="/">
        <div className="d-flex align-center">
          <img
            width={40}
            height={40}
            className="mr-15"
            src="./img/logo.png"
            alt=""
          />

          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
      </NavLink>
      <ul className="d-flex">
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img
            width={18}
            height={18}
            className="mr-10"
            src="./img/box.svg"
            alt="Корзина"
          />
          <span>1205 руб.</span>
        </li>
        <li>
          <NavLink to="/favorites">
            <img
              width={18}
              height={18}
              className="mr-30 cu-p"
              src="./img/heart.svg"
              alt="Закладки"
            />
          </NavLink>
        </li>
        <li>
          <img width={18} height={18} src="./img/user.svg" alt="Пользователь" />
        </li>
      </ul>
    </header>
  );
};

export default Header;
