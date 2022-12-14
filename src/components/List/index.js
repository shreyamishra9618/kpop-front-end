import React from "react";
import { items } from "../../data";
import Card from "../Card"
import '../List/style.css';


export default function List({ selectedId }) {
  return (
    <ul className="card-list">
      {items.map(card => (
        <Card key={card.id} {...card} isSelected={card.id === selectedId} />
      ))}
    </ul>
  );
}