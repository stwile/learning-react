import { RecipeType, ColorType } from '..';

declare module '*/recipe.json' {
  const value: RecipeType[];
  export = value;
}

declare module '*/color-data.json' {
  const value: ColorType[];
  export = value;
}
