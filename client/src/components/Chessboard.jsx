import React, { useEffect, useState } from 'react';
import Chessboard from 'chessboardjsx';
import { io } from 'socket.io-client';
import { Chess } from 'chess.js';

const socket = io('http://localhost:3000');

const ChessboardComponent = () => {
  const [fen, setFen] = useState('start');
  const [game, setGame] = useState(new Chess());

  useEffect(() => {
    socket.on('gameState', (newFen) => {
      setFen(newFen);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  function makeAMove(move) {
    const newGame = new Chess(game.fen()); // Create a new Chess instance with the current position
    const result = newGame.move(move);

    if (result !== null) {
      setFen(newGame.fen()); // Update the FEN position
      return result;
    }

    return null; // The move was illegal
  }

  function onDrop({ sourceSquare, targetSquare }) {
    const move = makeAMove({
      from: sourceSquare,
      to: targetSquare,
    });

    if (move === null) return;

    socket.emit('move', move);

    // Simulate opponent move (replace with your logic)
    setTimeout(() => {
      const opponentMove = makeRandomMove();
      socket.emit('move', opponentMove);
    }, 200);
  }

  function makeRandomMove() {
    const legalMoves = game.legal_moves();
    const randomMove = legalMoves[Math.floor(Math.random() * legalMoves.length)];
    makeAMove(randomMove);
  }

  return (
    <Chessboard
      position={fen}
    //   draggable={true}
      onDrop={(move) => onDrop(move)}
    />
  );
};

export default ChessboardComponent;


// import React, { useEffect, useState } from 'react';
// import Chessboard from 'chessboardjsx';
// import { io } from 'socket.io-client';
// import { Chess } from 'chess.js';

// const socket = io('http://localhost:3000');

// const ChessboardComponent = () => {
//   const [fen, setFen] = useState('start');
//   const [game, setGame] = useState(new Chess());
//   const [isMyTurn, setIsMyTurn] = useState(true);

//   useEffect(() => {
//     socket.on('gameState', (newFen) => {
//       setFen(newFen);
//       setIsMyTurn(true);
//     });

//     return () => {
//       socket.disconnect();
//     };
//   }, []);

//   function makeAMove(move) {
//     const newGame = new Chess(game.fen());
//     const result = newGame.move(move);

//     if (result !== null) {
//       setFen(newGame.fen());
//       return result;
//     }

//     return null;
//   }

//   function onDrop({ sourceSquare, targetSquare }) {
//     if (!isMyTurn) return;

//     const move = makeAMove({
//       from: sourceSquare,
//       to: targetSquare,
//     });

//     if (move === null) return;

//     socket.emit('move', move);
//     setIsMyTurn(false);

//     setTimeout(() => {
//       const opponentMove = makeRandomMove();
//       socket.emit('move', opponentMove);
//       setIsMyTurn(true);
//     }, 200);
//   }

//   function makeRandomMove() {
//     const legalMoves = game.legal_moves();
//     const randomMove = legalMoves[Math.floor(Math.random() * legalMoves.length)];
//     makeAMove(randomMove);
//     return randomMove;
//   }

//   return (
//     <div>
//       <Chessboard
//         position={fen}
//         draggable={isMyTurn}
//         onDrop={(move) => onDrop(move)}
//       />
//       {game.in_check() && game.in_checkmate() && <div>Checkmate! Game Over.</div>}
//     </div>
//   );
// };

// export default ChessboardComponent;
