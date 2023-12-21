import React, { useState, useEffect, useRef } from "react";
import Chessboard from "chessboardjsx";
import { Chess } from "chess.js";
import { io } from "socket.io-client";
import { toast } from "react-toastify";



function ChessBoard() {
  const gameRef = useRef(null);
  const [fen, setFen] = useState("start");
  const [playerColor, setPlayerColor] = useState(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [currentTurn, setCurrentTurn] = useState("white");


  const socket = useRef(null);

  useEffect(() => {

    if (!socket.current) {
      socket.current = io("http://localhost:3000");
    }
    gameRef.current = new Chess()
    socket.current.on("connection", () => {
      console.log(`Connected with ID: ${socket.current.id}`);
    });

    socket.current.on("joinedRoom", ({ room, players }) => {
      console.log(`Joined room ${room} with players ${players.join(", ")}`);
      setPlayerColor(players.indexOf(socket.current.id) === 0 ? "white" : "black");
    });

    socket.current.on("start", () => {
      setFen("start");
      setGameStarted(true);
    });

    socket.current.on("gameOver", ({ result, winner }) => {
      if (result === "checkmate") {
        // alert(`Checkmate! ${winner} wins.`);
        toast.warn(`Checkmate! ${winner} wins.`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      } else if (result === "stalemate") {
        // alert("Stalemate! The game is a draw.");
        toast.warn(`Stalemate! The game is a draw.`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }
    });

    const updateGame = (sourceSquare, targetSquare) => {
      const newGame = new Chess(gameRef.current.fen());
      const move = newGame.move({
        from: sourceSquare,
        to: targetSquare,
        promotion: "q",
      });

      if (move !== null) {
        gameRef.current = newGame;
        setFen(newGame.fen());
      }

      if (gameRef.current.in_checkmate()) {
        socket.current.emit("gameOver", { winner: playerColor === "white" ? "black" : "white" });
      }
    };

    socket.current.on("move", ({ sourceSquare, targetSquare }) => {
      updateGame(sourceSquare, targetSquare);
      setCurrentTurn(gameRef.current.turn() === "w" ? "white" : "black");
    });
  }, [playerColor]);


  const handleMove = ({ sourceSquare, targetSquare }) => {
    // mengatur giliran main
    if (gameRef.current.turn() !== playerColor[0]) {
      return;
    }

    // Get legal moves for the source square
    const legalMoves = gameRef.current.moves({ square: sourceSquare, verbose: true });

    // Check if the target square is a legal move
    const isLegalMove = legalMoves.some(move => move.to === targetSquare);

    if (!isLegalMove) {
      // alert("Illegal move! Please make a different move.");
      toast.warn('Illegal move! Please make a different move.', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      return;
    }

    // If the move is legal, make the move and update the game state
    gameRef.current.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: "q",
    });

    setFen(gameRef.current.fen());
    socket.current.emit("move", { sourceSquare, targetSquare });

    setCurrentTurn(gameRef.current.turn() === "w" ? "white" : "black");

    if (gameRef.current.in_checkmate()) {
      socket.current.emit("gameOver", { result: "checkmate", winner: playerColor });
      // alert(`Checkmate! ${playerColor} wins.`);
      toast.warn(`Checkmate! ${playerColor} wins.`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    } else if (gameRef.current.isStalemate()) {
      socket.current.emit("gameOver", { result: "stalemate" });
      // alert(`Stalemate! The game is a draw.`);
      toast.warn(`Stalemate! The game is a draw.`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
  };

  return (
    <div>
      {gameStarted && playerColor ? (
        <div>
          <h3>You are playing as {playerColor}</h3>
          <h4>Play turn : {currentTurn}</h4>
          <div>
            <Chessboard
              position={fen}
              onDrop={({ sourceSquare, targetSquare }) =>
                handleMove({ sourceSquare, targetSquare })
              }
              orientation={playerColor}
              draggable={true}
            />
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center my-[300px]">
          <h1 className="text-[35px] text-white">Waiting for opponent...</h1>
          {/* <span className="loading loading-ring loading-lg"></span> */}
          <span className="loading loading-dots loading-lg"></span>
        </div>
      )}
    </div>
  );
}

export default ChessBoard;