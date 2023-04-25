import './App.css';
import AddCardForm from './components/AddCardForm/AddCardForm';
import CardsContainer from './components/CardsContainer/CardsContainer';
import { products } from '../src/data/data.js';
import { useState } from 'react'


function App() {

  const [cards, setCards] = useState(products);

  const addCard = (product) => {
    const newState = [...cards, product];
    setCards(newState)
  }

  const deleteCard = id => setCards(cards.filter(el => el.id !== id))


  return (
    <div className="App">
      <AddCardForm addCard={addCard}/>
      <CardsContainer {...{cards, deleteCard}}/>
    </div>
  );
}

export default App;
