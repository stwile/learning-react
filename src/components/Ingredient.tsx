import type { IngredientType } from '~/src/types';

type Props = IngredientType;

const Ingredient = ({ amount, measurement, name }: Props) => (
  <li>
    {amount} {measurement} {name}
  </li>
);

export { Ingredient };
