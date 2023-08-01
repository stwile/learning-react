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
  id: string;
  title: string;
  color: string;
  rating: number;
};

type UserType = {
  id: string;
  firstName: string;
  lastName: string;
  city: string;
  state: string;
  email: string;
  admin: boolean;
};

type PersonalType = {
  name: string;
  email: string;
  avatar: string;
};

type UserDetailType = {
  name: string;
  login: string;
  avatar_url: string;
  location: string;
};

export type {
  RecipeType,
  IngredientType,
  ColorType,
  UserType,
  PersonalType,
  UserDetailType,
};
