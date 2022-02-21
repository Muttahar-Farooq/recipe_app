import React from "react";
import style from "./recipies.module.css";

const Recipe = ({ title, calories, imageSrc, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <ol>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p>{calories}</p>
      <img src={imageSrc} alt="" className={style.image} />
    </div>
  );
};

export default Recipe;
