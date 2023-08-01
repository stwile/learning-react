import type { RecipeType, ColorType, User } from '..';

declare module '*/recipe.json' {
  const value: RecipeType[];
  export = value;
}

declare module '*/color-data.json' {
  const value: ColorType[];
  export = value;
}

declare module '*/user-data.json' {
  const value: User[];
  export = value;
}
