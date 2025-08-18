// src/components/Greeting.tsx
type GreetingProps = {
  name: string;
};

function Greeting({ name }: GreetingProps): JSX.Element {
  return <h2>Hello, {name}! 👋</h2>;
}

export default Greeting;
