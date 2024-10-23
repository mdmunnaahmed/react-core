import { useReducer } from "react";

const initialState = {
  counter: 0,
  counter2: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, counter: state.counter + action.value };
    case "decrement":
      return { ...state, counter: state.counter - 1 };
    case "increment2":
      return { ...state, counter2: state.counter2 + action.value };
    case "decrement2":
      return { ...state, counter2: state.counter2 - 1 };

    default:
      return state;
  }
};
const Count = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>count - {count.counter}</div>
      <button
        onClick={() =>
          dispatch({
            type: "increment",
            value: 1,
          })
        }
      >
        Increment by 1
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "decrement",
          })
        }
      >
        Decrement by 1
      </button>

      <div>count - {count.counter2}</div>
      <button
        onClick={() =>
          dispatch({
            type: "increment2",
            value: 1,
          })
        }
      >
        Increment 2 by 1
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "decrement2",
          })
        }
      >
        Decrement 2 by 1
      </button>
    </div>
  );
};

export default Count;
