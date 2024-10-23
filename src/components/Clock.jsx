import { useEffect, useState } from "react";

const Clock = () => {
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date());

  const tick = () => {
    setDate(new Date());
  };

  const updateClick = () => {
    setCount((prevVal) => prevVal + 1);
  };

  useEffect(() => {
    document.title = `clicked ${count} times`;
  }, [count]);

  useEffect(() => {
    const intervalId = setInterval(tick, 1000); // Use tick function here

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h1>{date.toLocaleTimeString()}</h1> {/* Display the date correctly */}
      <button onClick={updateClick}>click update</button>
    </div>
  );
};

export default Clock;
