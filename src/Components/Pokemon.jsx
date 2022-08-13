import POKEMON from "../pokemon.json";
import { useState, useTransition } from "react";
export const Pokemon = () => {
  const [query, setQuery] = useState("");
  const [userInput, setUserInput] = useState("");
  const [isPending, startTransition] = useTransition();
  const userInputHandler = (e) => {
    setUserInput(e.target.value);
    startTransition(() => {
      setQuery(e.target.value);
    });
  };
  const queriedPokemon = POKEMON.results.filter((pokemon) => {
    return pokemon.name.includes(query.toLowerCase());
  });
  return (
    <>
      <div>
        <label htmlFor="query">Search for a Pokemon:</label>
        <input
          type="text"
          name="query"
          value={userInput}
          onChange={userInputHandler}
        />
      </div>
      <div>
        {isPending ? <h1>Loading results...</h1> : <h1>Search results:</h1>}
        {queriedPokemon.map((pokemon, index) => {
          return (
            <div key={index}>
              <a href={pokemon.url}>{pokemon.name}</a>
            </div>
          );
        })}
      </div>
      <div>
        <h1>The Whole list:</h1>
        {POKEMON.results.map((pokemon, index) => {
          return (
            <div key={index}>
              <p>{pokemon.name}</p>
              <a href={pokemon.url}>
                Got to the dedicated JSON file from the Pokemon api
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
};
