import React from 'react';
import RecipeList from './components/RecipeList';

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
      '1. Put salt on Chicken\n2. Put chicken in oven\n3. Eat Chicken</span>',
  },
  {
    id: 2,
    name: 'Plain Porks',
    servings: 1,
    cookTime: '0:45',
    instructions:
      '1. Put salt on Pork\n2. Put Pork in oven\n3. Eat Chicken</span>',
  },
];

export default App;
