import style from "./Card.module.scss"
const Card = (props) => {

    return ( 
        <div className={style.card}>
            {/* Иконка избранное */}
            <div className={style.favorite}>
              <img src="/img/unliked.svg" alt="Unliked" />
            </div>

            <img
              width={133}
              height={112}
              src={props.imgUrl}
              alt="Sneakers"
            />
            <h5>{props.title}</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>{props.price} руб.</b>
              </div>
              <button className={style.button} onClick={props.onClick }>
                <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>
     );
}
 
export default Card;