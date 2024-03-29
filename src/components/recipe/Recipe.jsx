import React, { useContext } from 'react';

import IngredientList from '../ingredient/IngredientList';

import { RecipeContext } from '../../App';

const Recipe = (props) => {
  const { handleDeleteRecipe, handleRecipeSelect } = useContext(RecipeContext);
  // const { name, cookTime, servings, instructions, ingredients } = props;
  return (
    <div className="recipe">
      <div className="recipe__header">
        <h3 className="recipe__title">{props.name}</h3>
        <div>
          <button
            className="btn btn--primary mr-1"
            onClick={() => handleRecipeSelect(props.id)}
          >
            Edit
          </button>
          <button
            className="btn btn--danger"
            onClick={() => handleDeleteRecipe(props.id)}
          >
            Delete
          </button>
        </div>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Cook Time: </span>
        <span className="recipe__value">{props.cookTime}</span>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Servings: </span>
        <span className="recipe__value">{props.servings}</span>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Instructions: </span>
        <div className="recipe__value recipe__instructions recipe__value--indented">
          {props.instructions}
        </div>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Ingredients: </span>
        <div className="recipe__value recipe__value--indented">
          <IngredientList ingredients={props.ingredients} />
        </div>
      </div>
    </div>
  );
};

export default Recipe;
