import Input from "./Input";
import { useEffect, useRef } from "react";

const Form = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div>
      <form action="">
        <Input ref={inputRef} type="text" placeholder="enter something" />
      </form>
    </div>
  );
};

export default Form;
