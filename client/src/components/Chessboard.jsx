import { useEffect, useRef, useState } from 'react'
import ChessBoard from 'chessboardjsx'
import { Chess } from 'chess.js';


function Chessboard() {
  const [fen, setFen] = useState("start")
  const game = useRef(null)

  useEffect(() => {
    game.current = new Chess()
  },[])

  const onDrop = ({ sourceSquare, targetSquare }) => {
    const move = game.current.move({
      from: sourceSquare,
      to: targetSquare,
    });
  
    if (move !== null) {
      setFen(game.current.fen());
    }
  };

  console.log(game, '<<')

  return (
    <>
      <div className='App'>
        <ChessBoard position={fen} onDrop={onDrop}/>
      </div>
    </>
  )
}

export default Chessboard