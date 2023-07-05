import { IngredientList } from './IngredientList';
import { Instructions } from './Instructions';

import type { RecipeType } from '~/src/types';

type Props = RecipeType;

const Recipe = ({ name, ingredients, steps }: Props) => (
  <section id={name.toLocaleLowerCase().replace(/ /g, '-')}>
    <IngredientList list={ingredients} />
    <Instructions title="Cooking Instructions" steps={steps} />
  </section>
);

export { Recipe };
