import { useState } from 'react';
import Title from './Title';
import Board from './Board';
import '../App.css';

const Game = () => {
  const [title, setTitle] = useState("Player X's Turn");
  return (
    <section className="Game">
      <Title title={title} />
      <Board setTitle={setTitle} />
    </section>
  );
};

export default Game;
