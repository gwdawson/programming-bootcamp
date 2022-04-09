import { useState, useEffect } from 'react';
import useSound from 'use-sound';
import victory from '../sound-effect.mp4';
import '../App.css';

const Board = ({ setTitle }) => {
  const [btn1, setBtn1] = useState(' ');
  const [btn2, setBtn2] = useState(' ');
  const [btn3, setBtn3] = useState(' ');
  const [btn4, setBtn4] = useState(' ');
  const [btn5, setBtn5] = useState(' ');
  const [btn6, setBtn6] = useState(' ');
  const [btn7, setBtn7] = useState(' ');
  const [btn8, setBtn8] = useState(' ');
  const [btn9, setBtn9] = useState(' ');
  const [currentPlayer, setCurrentPlayer] = useState('X');

  const swapPlayer = () => {
    currentPlayer === 'X'
      ? setCurrentPlayer('O') && setTitle("Player O's Turn")
      : setCurrentPlayer('X') && setTitle("Player X's Turn");
  };

  const [play] = useSound(victory);

  const checkWinner = () => {
    if (btn1 === btn2 && btn2 === btn3 && btn1 !== ' ') {
      setBtn1('🎉');
      setBtn2('🎉');
      setBtn3('🎉');
      play();
    }
    if (btn4 === btn5 && btn5 === btn6 && btn4 !== ' ') {
      setBtn4('🎉');
      setBtn5('🎉');
      setBtn6('🎉');
      play();
    }
    if (btn7 === btn8 && btn8 === btn9 && btn7 !== ' ') {
      setBtn7('🎉');
      setBtn8('🎉');
      setBtn9('🎉');
      play();
    }
    if (btn1 === btn4 && btn4 === btn7 && btn1 !== ' ') {
      setBtn1('🎉');
      setBtn4('🎉');
      setBtn7('🎉');
      play();
    }
    if (btn2 === btn5 && btn5 === btn8 && btn2 !== ' ') {
      setBtn2('🎉');
      setBtn5('🎉');
      setBtn8('🎉');
      play();
    }
    if (btn3 === btn6 && btn6 === btn9 && btn3 !== ' ') {
      setBtn3('🎉');
      setBtn6('🎉');
      setBtn9('🎉');
      play();
    }
    if (btn1 === btn5 && btn5 === btn9 && btn1 !== ' ') {
      setBtn1('🎉');
      setBtn5('🎉');
      setBtn9('🎉');
      play();
    }
    if (btn3 === btn5 && btn5 === btn7 && btn3 !== ' ') {
      setBtn3('🎉');
      setBtn5('🎉');
      setBtn7('🎉');
      play();
    }
  };

  useEffect(() => {
    checkWinner();
  }, [btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9]);

  const onClick = (btn) => {
    if (btn === 'btn1') setBtn1(currentPlayer);
    if (btn === 'btn2') setBtn2(currentPlayer);
    if (btn === 'btn3') setBtn3(currentPlayer);
    if (btn === 'btn4') setBtn4(currentPlayer);
    if (btn === 'btn5') setBtn5(currentPlayer);
    if (btn === 'btn6') setBtn6(currentPlayer);
    if (btn === 'btn7') setBtn7(currentPlayer);
    if (btn === 'btn8') setBtn8(currentPlayer);
    if (btn === 'btn9') setBtn9(currentPlayer);
    swapPlayer();
  };

  return (
    <div className="Board">
      <button id="btn1" className="Button mg-right mg-bottom" onClick={() => onClick('btn1')}>
        {btn1}
      </button>
      <button id="btn2" className="Button mg-right mg-bottom" onClick={() => onClick('btn2')}>
        {btn2}
      </button>
      <button id="btn3" className="Button mg-bottom" onClick={() => onClick('btn3')}>
        {btn3}
      </button>
      <br />
      <button id="btn4" className="Button mg-right mg-bottom" onClick={() => onClick('btn4')}>
        {btn4}
      </button>
      <button id="btn5" className="Button mg-right mg-bottom" onClick={() => onClick('btn5')}>
        {btn5}
      </button>
      <button id="btn6" className="Button mg-bottom" onClick={() => onClick('btn6')}>
        {btn6}
      </button>
      <br />
      <button id="btn7" className="Button mg-right" onClick={() => onClick('btn7')}>
        {btn7}
      </button>
      <button id="btn8" className="Button mg-right" onClick={() => onClick('btn8')}>
        {btn8}
      </button>
      <button id="btn9" className="Button" onClick={() => onClick('btn9')}>
        {btn9}
      </button>
    </div>
  );
};

export default Board;
