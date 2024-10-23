import { useEffect, useRef, useState } from "react";

const Clock = () => {
  // const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date());
  const buttonRef = useRef();
  const tick = () => {
    setDate(new Date());
  };

  // const updateClick = () => {
  //   setCount((prevVal) => prevVal + 1);
  // };

  // useEffect(() => {
  //   document.title = `clicked ${count} times`;
  // }, [count]);

  useEffect(() => {
    buttonRef.current = setInterval(tick, 1000); // Use tick function here

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(buttonRef.current);
  }, []);

  return (
    <div>
      <h1>{date.toLocaleTimeString()}</h1> {/* Display the date correctly */}
      {/* <button onClick={updateClick}>click update</button> */}
      <button onClick={() => clearInterval(buttonRef.current)}>Clear time</button>
    </div>
  );
};

export default Clock;
