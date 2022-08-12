import { useState } from "react";
export const Authenticated = () => {
  const [isAuth, setAuth] = useState(false);
  return (
    <>
      <button
        onClick={() => {
          setAuth(!isAuth);
        }}
      >
        Auth
      </button>
      <h1>{isAuth ? "Welcome Mr. Auth" : "What did you do to Mr. Auth ?"}</h1>
      {isAuth ? <p>How are you today?</p> : null}

      {isAuth && (
        <p>
          It works because in JavaScript, true && expression always evaluates to
          expression, and false && expression always evaluates to false.
          Therefore, if the condition is true, the element right after && will
          appear in the output. If it is false, React will ignore and skip it.
        </p>
      )}
    </>
  );
};
