import React from "react";
import ChessboardComponent from "./components/Chessboard";
import PlayRandomMoveEngine from "./components/Chessboard";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="text-center my-8">
        <h1 className="text-2xl font-bold mb-4">Chess Game</h1>
        <div className="inline-block shadow-md rounded-xl overflow-hidden mt-10">
          <ChessboardComponent />
        </div>
      </div>
    </>
  );
};

export default App;
