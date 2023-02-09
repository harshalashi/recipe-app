import React from 'react';

const Ingredient = (props) => {
  return (
    <>
      <span>{props.name}</span>
      <span>{props.amount}</span>
    </>
  );
};

export default Ingredient;
