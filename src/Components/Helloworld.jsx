export const HelloWorld = (props) => {
  return (
    <>
      <h1>Hello World and {props.name}!</h1>
      <p>{props.desc}</p>
    </>
  );
};
