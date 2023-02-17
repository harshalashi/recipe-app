import React, { useState } from 'react';
import RecipeList from './components/recipe/RecipeList';
import './components/css/app.css';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const [recipes, setRecipes] = useState(sampleRecipes);

  const handleAddRecipe = () => {
    const newRecipe = {
      id: uuidv4(),
      name: 'New',
      servings: 1,
      cookTime: '1:00',
      instructions: 'Instr.',
      ingredients: [
        {
          id: uuidv4(),
          name: 'Name',
          amount: '1 Tbsp',
        },
      ],
    };
    setRecipes([...recipes, newRecipe]);
  };

  const handleDeleteRecipe = (id) => {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  };

  return (
    <div>
      <RecipeList
        recipes={recipes}
        handleAddRecipe={handleAddRecipe}
        handleDeleteRecipe={handleDeleteRecipe}
      />
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
