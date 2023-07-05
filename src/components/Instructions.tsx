type Props = {
  title: string;
  steps: string[];
};

const Instructions = ({ title, steps }: Props) => (
  <section className="instructions">
    <h2>{title}</h2>
    {steps.map((step, i) => (
      <p key={i}>{step}</p>
    ))}
  </section>
);

export { Instructions };
