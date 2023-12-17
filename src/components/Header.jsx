const Header = () => {
    return ( 
        <header className="d-flex justify-between align-center p-40">
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
        <ul className="d-flex">
          <li className="mr-30">
            <img
              width={18}
              height={18}
              className="mr-10"
              src="./img/box.svg"
              alt=""
            />
            <span>1205 руб.</span>
          </li>
          <li>
            <img width={18} height={18} src="./img/user.svg" alt="" />
          </li>
        </ul>
      </header>
     );
}
 
export default Header;