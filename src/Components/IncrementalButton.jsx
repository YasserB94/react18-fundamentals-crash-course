import { useState } from "react";

export const IncrementalButton = () => {
  let [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count++)}>The count is:{count}</button>
  );
};
