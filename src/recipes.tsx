import ReactDOM from 'react-dom/client';

// レシピのデータ
type RecipeType = {
  name: string;
  ingredients: Array<{
    name: string;
    amount: number;
    measurement: string;
  }>;
  steps: string[];
};

const data: Array<RecipeType> = [
  {
    name: 'Baked Salmon',
    ingredients: [
      { name: 'Salmon', amount: 1, measurement: 'lb' },
      { name: 'Pine Nuts', amount: 1, measurement: 'cup' },
      { name: 'Butter Lettuce', amount: 2, measurement: 'cups' },
      { name: 'Yellow Squash', amount: 1, measurement: 'med' },
      { name: 'Olive Oil', amount: 0.5, measurement: 'cup' },
      { name: 'Garlic', amount: 3, measurement: 'cloves' },
    ],
    steps: [
      'Preheat the oven to 350 degrees.',
      'Spread the olive oil around a glass baking dish.',
      'Add the salmon, garlic, and pine nuts to the dish.',
      'Bake for 15 minutes.',
      'Add the yellow squash and put back in the oven for 30 mins.',
      'Remove from oven and let cool for 15 minutes. Add the lettuce and serve.',
    ],
  },
  {
    name: 'Fish Tacos',
    ingredients: [
      { name: 'Whitefish', amount: 1, measurement: 'lb' },
      { name: 'Cheese', amount: 1, measurement: 'cup' },
      { name: 'Iceberg Lettuce', amount: 2, measurement: 'cups' },
      { name: 'Tomatoes', amount: 2, measurement: 'large' },
      { name: 'Tortillas', amount: 3, measurement: 'med' },
    ],
    steps: [
      'Cook the fish on the grill until hot.',
      'Place the fish on the 3 tortillas.',
      'Top them with lettuce, tomatoes, and cheese.',
    ],
  },
];

type MenuProps = {
  title: string;
  recipes: Array<RecipeType>;
};

const Recipe = ({ name, ingredients, steps }: RecipeType): JSX.Element => (
  <section id={name.toLocaleLowerCase().replace(/ /g, '-')}>
    <ul className="ingredients">
      {ingredients.map((ingredient, i) => (
        <li key={i}>{ingredient.name}</li>
      ))}
    </ul>
    <section className="instructions">
      <h2>Cooking Instructions</h2>
      {steps.map((step, i) => (
        <p key={i}>{step}</p>
      ))}
    </section>
  </section>
);

const Menu = ({ title, recipes }: MenuProps): JSX.Element => (
  <article>
    <header>
      <h1>{title}</h1>
    </header>
    <div className="recipes">
      {recipes.map((recipe, i) => (
        <Recipe key={i} name={recipe.name} ingredients={recipe.ingredients} steps={recipe.steps} />
      ))}
    </div>
  </article>
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Menu recipes={data} title="Delicious Recipes" />,
);
