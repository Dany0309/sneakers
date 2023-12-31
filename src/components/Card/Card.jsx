import React, { useState } from "react";
import ContentLoader from "react-content-loader";
import AppContext from '../../context';
import style from "./Card.module.scss";
const Card = ({
  id,
  onFavorite,
  onPlus,
  title,
  imgUrl,
  price,
  favorited = false,
  added = false,
  loading = false,
}) => {
 
  // Хук useState для кнопки плюс
  const [isAdded, setIsAdded] = React.useState(added);
  const onClickPlus = () => {
    onPlus({ id, title, imgUrl, price });
    setIsAdded(!isAdded);
  };
  // Хук useState для кнопки избранное
  const [isFavorite, setIsFavorite] = React.useState(favorited);
  const onClickFavorite = () => {
    onFavorite({ id, title, imgUrl, price });
    setIsFavorite(!isFavorite);
  };
  return (
    <div className={style.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={155}
          height={250}
          viewBox="0 0 155 265"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="1" y="0" rx="10" ry="10" width="155" height="155" />
          <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
          <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
          <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
          <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          <div className={style.favorite} onClick={onClickFavorite}>
            <img
              src={isFavorite ? "/img/liked.svg" : "/img/unliked.svg"}
              alt="Unliked"
            />
          </div>
          <img width="100%" height={135} src={imgUrl} alt="Sneakers" />
          <h5>{title}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>{price} руб.</b>
            </div>
            <img
              className={style.plus}
              onClick={onClickPlus}
              src={
                isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"
              }
              alt="Plus"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
