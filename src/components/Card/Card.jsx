import React, { useState } from "react";
import style from "./Card.module.scss";
const Card = ({onFavorite, onPlus, title, imgUrl, price}) => {
  // Хук useState для кнопки плюс
  const[isAdded, setIsAdded]=React.useState(false);
  const onClickPlus=()=>{
    onPlus({title,imgUrl, price});
    setIsAdded(!isAdded);
  }
  // Хук useState для кнопки избранное
  const[isFavorite, setIsFavorite]=React.useState(false);
  const onClickFavorite=()=>{
    setIsFavorite(!isFavorite);
  }
  return (
    <div className={style.card}>
      {/* Иконка избранное */}
      <div className={style.favorite} onClick={onClickFavorite}>
        <img src={isFavorite?"/img/liked.svg":"/img/unliked.svg"} alt="Unliked" />
      </div>

      <img width={133} height={112} src={imgUrl} alt="Sneakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>

        <img
          onClick={onClickPlus}
          className={style.plus}
          src={isAdded ?"/img/btn-checked.svg":"/img/btn-plus.svg"}
          alt="Plus"
        />
      </div>
    </div>
  );
};

export default Card;
