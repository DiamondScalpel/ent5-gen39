import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import "./styles/PokeInfoPage.css";
import Header from '../components/shared/Header';

export default () => {
  const [pokemon, getPokemon] = useFetch();

  useEffect(() => {
    const pokemonName = window.location.href.split("/").pop();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    getPokemon(url);
  }, []);

  const capitalizeString = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <>
      <Header top={'90%'} left={'90%'} />
      <main className="main__container">
        <div className="container">
          <figure
            className={`image__container bg__${pokemon?.types[0].type.name}`}
          >
            <img
              className="pokemon__img-container"
              src={pokemon?.sprites.other["official-artwork"].front_default}
            ></img>
          </figure>

          <p className="pokemon__id"># {pokemon?.id}</p>
          <h2 className={`pokeinfo__name text__${pokemon?.types[0].type.name}`}>
            {pokemon?.name ? capitalizeString(pokemon?.name) : pokemon?.name}
          </h2>

          <div className="poke__height__weight-container">
            <div className="weight__container">
              <p className="weight__text">Weight</p>
              <p className="weight__num">{pokemon?.weight}</p>
            </div>
            <div className="height__container">
              <p className="height__text">Height</p>
              <p className="height__num">{pokemon?.height}</p>
            </div>
          </div>

          <div className="types__abilities__container">
            <div className="types__container">
              <h3>Type</h3>
              <ul className="types__list">
                {pokemon?.types.map((type) => (
                  <li key={type.type.url}>
                    {capitalizeString(type.type.name)}
                  </li>
                ))}
              </ul>
            </div>

            <div className="abilities-container">
              <h3>Ability</h3>
              <ul className="abilities__list">
                {pokemon?.abilities.map((skill) => (
                  <li key={skill.ability.url}>
                    {capitalizeString(skill.ability.name)}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="stats__container">
            <h2>Stats</h2>
            <ul className="stats__list">
              {pokemon?.stats.map((stat) => (
                <li key={stat.stat.url}>
                  <span className="stats__list-label"> {capitalizeString(stat.stat.name)}</span>
                  <span className="stats__list-num"> {stat.base_stat}/150</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="moves__container">
          <h2>Movements</h2>
          <ul className="moves__list">
            {pokemon?.moves.map((move) => (
              <li className="moves__item" key={move.move.url}>
                {capitalizeString(move.move.name)}
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
};
