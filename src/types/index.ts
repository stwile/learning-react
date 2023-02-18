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

type ColorType = {
  id?: string;
  title: string;
  color: string;
  rating: number;
};

export type { RecipeType, IngredientType, ColorType };
