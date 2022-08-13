export const List = () => {
  const listItems = ["first-list-item", "second-list-item", "third-list-item"];
  return (
    <>
      {listItems.map((item) => {
        return <p key={item}>{item}</p>;
      })}
    </>
  );
};
