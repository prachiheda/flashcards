import React from "react";
import "./Flashcard.css";

const Flashcard = ({ question, answer, flipped, onClick }) => {
  return (
    <div className={`flashcard ${flipped ? "flipped" : ""}`} onClick={onClick}>
      <div className="flashcard-content">{flipped ? answer : question}</div>
    </div>
  );
};

export default Flashcard;
