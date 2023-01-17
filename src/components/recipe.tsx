import { IngredientList } from './ingredientList';
import { Instructions } from './instructions';

import type { RecipeType } from 'types';

type Props = RecipeType;

const Recipe = ({ name, ingredients, steps }: Props) => (
  <section id={name.toLocaleLowerCase().replace(/ /g, '-')}>
    <IngredientList list={ingredients} />
    <Instructions title="Cooking Instructions" steps={steps} />
  </section>
);

export { Recipe };
