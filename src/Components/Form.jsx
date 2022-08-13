import { useState } from "react";

export const Form = () => {
  const [pokemon, setPokemon] = useState("Bulbasaur");
  const [goodTrainer, setGoodTrainer] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    switch (pokemon) {
      case "Bulbasaur":
      case "bulbasaur":
      case "bulba":
        setGoodTrainer(true);
        break;
      default:
        setGoodTrainer(false);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="pokemon">The best pokemon is:</label>
      <input
        name="pokemonName"
        type="text"
        value={pokemon}
        onChange={(e) => {
          setPokemon(e.target.value);
        }}
      ></input>
      <button type="submit">I have chosen.</button>
      {goodTrainer && <h1>Yes, there is only 1 number one!</h1>}
    </form>
  );
};
