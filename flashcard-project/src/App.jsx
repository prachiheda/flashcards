import React, { useState } from 'react';
import Flashcard from './components/flashcard';
import './App.css';


function App() {
  const [cards, setCards] = useState([
    { id: 1, question: 'What year was Trader Joe\'s founded?', answer: '1958', flipped: false },
  { id: 2, question: 'Who founded Trader Joe\'s?', answer: 'Joe Coulombe', flipped: false },
  { id: 3, question: 'Where was the first Trader Joe\'s store opened?', answer: 'Pasadena, California', flipped: false },
  { id: 4, question: 'What is Trader Joe\'s mascot?', answer: 'Trader Joe (a South Seas trader)', flipped: false },
  { id: 5, question: 'What is a popular item sold at Trader Joe\'s known for its cult following?', answer: 'Cookie Butter', flipped: false },
  { id: 6, question: 'What is the name of the customer feedback system at Trader Joe\'s?', answer: 'Fearless Flyer', flipped: false },
  { id: 7, question: 'Trader Joe\'s operates under what parent company?', answer: 'Aldi Nord', flipped: false },
  { id: 8, question: 'Which state has the most Trader Joe\'s stores?', answer: 'California', flipped: false },
  { id: 9, question: 'What is the average size of a Trader Joe\'s store?', answer: 'Approximately 10,000-15,000 square feet', flipped: false },
  { id: 10, question: 'What is Trader Joe\'s famous for selling?', answer: 'Unique and exotic foods, often at affordable prices', flipped: false }
    // Add more card pairs as needed
  ]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const flipCard = () => {
    const updatedCards = [...cards];
    updatedCards[currentCardIndex].flipped = !updatedCards[currentCardIndex].flipped;
    setCards(updatedCards);
  };

  const nextCard = () => {
    // Generate a random index different from the current index
    let randomIndex = currentCardIndex;
    while (randomIndex === currentCardIndex) {
      randomIndex = Math.floor(Math.random() * cards.length);
    }
    setCurrentCardIndex(randomIndex);
    flipCard(); // Flip the card back to the question when moving to the next card
  };

  return (
    <div className="App">
      <header>
        <h1>Trader Joe's Flashcards</h1>
        <p>A collection of flashcards to learn interesting facts about Trader Joe's</p>
        <p>Total Cards: {cards.length}</p>
      </header>
      <div className="flashcard-container">
        <Flashcard
          question={cards[currentCardIndex].question}
          answer={cards[currentCardIndex].answer}
          flipped={cards[currentCardIndex].flipped}
          onClick={flipCard}
        />
      </div>
      <button onClick={nextCard}>Next</button>
    </div>
  );
}

export default App;