type IngredientType = {
  name: string;
  amount: number;
  measurement: string;
};

type RecipeType = {
  name: string;
  ingredients: IngredientType[];
  steps: string[];
};

export type { RecipeType, IngredientType };
