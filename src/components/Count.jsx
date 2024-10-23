import { useReducer } from "react";

const initialState = 5;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;

    default:
      return state;
  }
};
const Count = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>count - {count}</div>
      <button onClick={()=> dispatch('increment')}>Increment</button>
      <button onClick={()=> dispatch('decrement')}>Decrement</button>
    </div>
  );
};

export default Count;
