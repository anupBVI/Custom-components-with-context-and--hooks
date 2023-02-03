import React from "react";
import useCounter from "../Hooks/use-counter";
import Button from "./../components/Button";

const CounterPage = ({ initialCount }) => {
  const { count, increment } = useCounter(initialCount);

  return (
    <div>
      <h1>With Custom hook </h1>
      <h1> Count is {count}</h1>
      <Button primary onClick={increment}>
        Increment
      </Button>
    </div>
  );
};

export default CounterPage;
