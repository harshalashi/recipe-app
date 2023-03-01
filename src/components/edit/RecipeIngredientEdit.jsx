import React from 'react';
import Ingredient from '../ingredient/Ingredient';

const RecipeIngredientEdit = (props) => {
  const { ingredient, handleIngredientChange } = props;

  function handleChange(changes) {
    handleIngredientChange(ingredient.id, { ...ingredient, ...changes });
  }

  return (
    <>
      <input
        value={ingredient.name}
        className="recipe-edit__input"
        onInput={(e) => handleChange({ name: e.target.value })}
        type="text"
      />
      <input
        value={ingredient.amount}
        className="recipe-edit__input"
        type="text"
        onInput={(e) => handleChange({ amount: e.target.value })}
      />
      <button className="btn btn--danger">&times;</button>
    </>
  );
};

export default RecipeIngredientEdit;
