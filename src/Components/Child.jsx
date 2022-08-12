export const Child = (props) => {
  return (
    <button
      onClick={() => {
        props.helloParent("Hello there parent!");
      }}
    >
      Child Button would like to say hi to it's parent!
    </button>
  );
};
