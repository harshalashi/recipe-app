import React from 'react';
import RecipeList from './components/recipe/RecipeList';
import './components/css/app.css';

const App = () => {
  return (
    <div>
      <RecipeList recipes={sampleRecipes} />
    </div>
  );
};

const sampleRecipes = [
  {
    id: 1,
    name: 'Plain Chicken',
    servings: 3,
    cookTime: '1:45',
    instructions:
      '1. Put salt on Chicken\n2. Put chicken in oven\n3. Eat Chicken',
    ingredients: [
      {
        id: 1,
        name: 'Chicken',
        amount: '2 Pounds',
      },
      {
        id: 2,
        name: 'Salt',
        amount: '1 Tbsp',
      },
    ],
  },
  {
    id: 2,
    name: 'Plain Porks',
    servings: 1,
    cookTime: '0:45',
    instructions: '1. Put salt on Pork\n2. Put Pork in oven\n3. Eat Chicken',
    ingredients: [
      {
        id: 1,
        name: 'Porks',
        amount: '3 Pounds',
      },
      {
        id: 2,
        name: 'Paprika',
        amount: '3 Tbsp',
      },
    ],
  },
];

export default App;
