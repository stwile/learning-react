import type { IngredientType } from '~/src/types';

type Props = {
  list: IngredientType[];
};

const IngredientList = ({ list }: Props) => (
  <ul className="ingredients">
    {list.map((ingredient, i) => (
      <li key={i}>{ingredient.name}</li>
    ))}
  </ul>
);

export { IngredientList };
