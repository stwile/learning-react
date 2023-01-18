import { RecipeType } from '..';

declare module '*/recipe.json' {
  const value: RecipeType[];
  export = value;
}
