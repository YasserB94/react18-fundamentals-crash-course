export const Clicker = () => {
  const handleClick = (e) => {
    console.log("hi", e);
  };
  return (
    <>
      <button
        onClick={(e) => {
          handleClick(e);
        }}
      >
        Click
      </button>
    </>
  );
};
