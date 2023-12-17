import style from "./Drawer.module.scss"
const Drawer = () => {
    return (
        <div style={{display:"none"}} className={style.overlay}> 
        <div className={style.drawer}>
        <h2 className="mb-30 d-flex justify-between">Корзина <img className="cu-p" src="/img/btn-remove.svg" alt="Remove" /></h2>
        <div className="items flex">
          <div className="cartItem d-flex align-center mb-20">
            <img
              className="mr-20"
              width={70}
              height={70}
              src="/img/sneakers/1.jpg"
              alt="Sneakers"
            />
            <div className="mr-20">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img
              className={style.removeBtn}
              src="/img/btn-remove.svg"
              alt="Remove"
            />
          </div>
          <div className="cartItem d-flex align-center">
            <img
              className="mr-20"
              width={70}
              height={70}
              src="/img/sneakers/1.jpg"
              alt="Sneakers"
            />
            <div className="mr-20">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img
              className={style.removeBtn}
              src="/img/btn-remove.svg"
              alt="Remove"
            />
          </div>
        </div>
        <div className={style.cartTotalBlock}>
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>21 498 руб.</b>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div></div>
              <b>1074 руб.</b>
            </li> 
          </ul>
         <button className={style.greenButton}>Оформить заказ <img src="/img/arrow.svg" alt="Arrow" /></button>
        </div>
        </div>
      </div>
     );
}
 
export default Drawer;