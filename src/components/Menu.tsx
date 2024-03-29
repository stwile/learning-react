import { Recipe } from './Recipe';

import type { RecipeType } from '~/src/types';

type Props = {
  recipes: RecipeType[];
};

const Menu = ({ recipes }: Props) => (
  <article>
    <header>
      <h1>Delicious Recipes</h1>
    </header>
    <div className="recipes">
      {recipes.map((recipe, i) => (
        <Recipe
          key={i}
          name={recipe.name}
          ingredients={recipe.ingredients}
          steps={recipe.steps}
        />
      ))}
    </div>
  </article>
);

export { Menu };
