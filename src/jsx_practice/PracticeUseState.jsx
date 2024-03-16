import { useState } from "react";

const PracticeUseState = () => {
  const [counter, setCounter] = useState(0);

  const increment = () =>
    setCounter((lastCounter) =>
      lastCounter < 4 ? lastCounter + 1 : lastCounter,
    );

  const incrementBy3 = () => {
    increment();
    increment();
    increment();
  };

  const decrement = () => setCounter(counter - 1);

  return (
    <div>
      <button onClick={() => increment()}>Increment</button>
      <button onClick={() => incrementBy3()}>Increment by 3</button>
      <button onClick={() => decrement()}>Decrement</button>
      <h3>{counter}</h3>
    </div>
  );
};

export default PracticeUseState;
