import React, { useState, useEffect } from 'react';
import RecipeList from './components/recipe/RecipeList';
import './components/css/app.css';
import { v4 as uuidv4 } from 'uuid';
import RecipeEdit from './components/edit/RecipeEdit';

export const RecipeContext = React.createContext();

const LOCAL_STORAGE_KEY = 'cookingWithReact.recipes';

const App = () => {
  // const [recipes, setRecipes] = useState(() => {
  //   return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || []);
  // });

  // useEffect(() => {
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes));
  // }, [recipes]);

  //Solution for without React.StrictMode

  const [selectedRecipeId, setSelectedRecipeId] = useState();

  const [recipes, setRecipes] = useState(sampleRecipes);

  const selectedRecipe = recipes.find(
    (recipe) => recipe.id === selectedRecipeId
  );

  useEffect(() => {
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (recipeJSON != null) setRecipes(JSON.parse(recipeJSON));
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes));
  }, [recipes]);

  const handleAddRecipe = () => {
    const newRecipe = {
      id: uuidv4(),
      name: '',
      servings: 1,
      cookTime: '',
      instructions: '',
      ingredients: [
        {
          id: uuidv4(),
          name: 'Name',
          amount: '1 Tbsp',
        },
      ],
    };
    setSelectedRecipeId(newRecipe.id);
    setRecipes([...recipes, newRecipe]);
  };

  const handleDeleteRecipe = (id) => {
    if (selectedRecipeId != null && selectedRecipeId === id) {
      setSelectedRecipeId(undefined);
    }
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  };
  const handleRecipeSelect = (id) => {
    setSelectedRecipeId(id);
  };

  const handleRecipeChange = (id, recipe) => {
    const newRecipes = [...recipes];
    const index = newRecipes.findIndex((r) => r.id === id);
    newRecipes[index] = recipe;
    setRecipes(newRecipes);
  };
  const recipeContextValue = {
    handleAddRecipe,
    handleDeleteRecipe,
    handleRecipeSelect,
    handleRecipeChange,
  };

  return (
    <RecipeContext.Provider value={recipeContextValue}>
      <RecipeList recipes={recipes} />
      {selectedRecipe && <RecipeEdit recipe={selectedRecipe} />}
    </RecipeContext.Provider>
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
