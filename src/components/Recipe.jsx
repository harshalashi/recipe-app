import React from 'react';

const Recipe = (props) => {
  return (
    <div>
      <div>
        <h3>{props.name}</h3>
        <div>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
      <div>
        <span>Cook Time: </span>
        <span>{props.cookTime}</span>
      </div>
      <div>
        <span>Servings: </span>
        <span>{props.servings}</span>
      </div>
      <div>
        <span>Instructions: </span>
        <div>{props.instructions}</div>
      </div>
    </div>
  );
};

export default Recipe;
