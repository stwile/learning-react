import type { IngredientType } from 'types';

type Props = IngredientType;

const Instructions = ({ amount, measurement, name }: Props) => (
  <li>
    {amount} {measurement} {name}
  </li>
);

export { Instructions };
