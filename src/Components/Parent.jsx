import { Child } from "./Child";
export const Parent = () => {
  const sayHello = (message) => {
    console.warn(`Child says: ${message}`);
    console.warn("Parent is not responding....");
  };

  return <Child helloParent={sayHello} />;
};
