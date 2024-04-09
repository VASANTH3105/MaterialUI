import React from "react";
import Cards from "../elements/card/Cards";
import { cards } from "../constants";

const Cardsmap = () => {
  return (
    <div>
      {cards.map((card) => (
        <Cards key={card.title} {...card} />
      ))}
    </div>
  );
};

export default Cardsmap;
