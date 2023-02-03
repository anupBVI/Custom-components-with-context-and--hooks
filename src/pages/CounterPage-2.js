import React, { useReducer } from "react";
import Panel from "../components/Panel";
import Button from "./../components/Button";
import Produce from "immer";

const CounterPage2 = ({ initialCount }) => {
  //   const [count, setCount] = useState(initialCount);
  //   const [valueToAdd, setValueToAdd] = useState(0);

  const INCREMENT_COUNT = "increment";
  const DECREMENT_COUNT = "decrement";
  const SET_VALUE_TO_ADD = "change_value_to_add";
  const ADD_VALUE_TO_COUNT = "add_value_to_count";
  const reducer = (state, action) => {
    switch (action.type) {
      case INCREMENT_COUNT:
        state.count = state.count + 1;
        return;
      case DECREMENT_COUNT:
        state.count = state.count - 1;
        return;
      case SET_VALUE_TO_ADD:
        state.valueToAdd = action.payload;
        return;

      case ADD_VALUE_TO_COUNT:
        state.count = state.count + state.valueToAdd;
        state.valueToAdd = 0;
        return;

      default:
        return;
    }

    //   if (action.type === INCREMENT_COUNT) {
    //     return {
    //       ...state,
    //       count: state.count + 1,
    //     };
    //   }
    //   if (action.type === DECREMENT_COUNT) {
    //     return {
    //       ...state,
    //       count: state.count - 1,
    //     };
    //   }
    //   if (action.type === SET_VALUE_TO_ADD) {
    //     return {
    //       ...state,
    //       valueToAdd: action.payload,
    //     };
    //   }

    //   return state;
  };
  const [state, dispatch] = useReducer(Produce(reducer), {
    count: initialCount,
    valueToAdd: 0,
  });

  console.log(state);
  const increment = () => {
    dispatch({
      type: INCREMENT_COUNT,
    });
  };
  const decrement = () => {
    // setCount(count - 1);
    dispatch({
      type: DECREMENT_COUNT,
    });
  };
  const handleChange = (e) => {
    const value = parseInt(e.target.value);
    console.log(value);

    dispatch({
      type: SET_VALUE_TO_ADD,
      payload: value,
    });
    // setValueToAdd(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // setCount(count + valueToAdd);
    // setValueToAdd(0);
    // setValueToAdd(value)

    dispatch({
      type: ADD_VALUE_TO_COUNT,
    });
  };

  return (
    <Panel className="m-3">
      <h1> Count is {state.count}</h1>
      <div className="flex flex-row gap-2">
        <Button primary onClick={increment}>
          Increment
        </Button>
        <Button danger onClick={decrement}>
          Decrement
        </Button>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          value={state.valueToAdd || ""}
          onChange={handleChange}
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        />
        <Button>Add It</Button>
      </form>
    </Panel>
  );
};

export default CounterPage2;
