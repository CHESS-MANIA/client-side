import Chessboard from "../components/Chessboard";
import Navbar from "../components/Navbar";

function GameplayPage() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center">
        <Chessboard
          className="w-64 h-64"
          boardStyle="rounded-lg shadow-md"
        />
      </div>
    </>
  );
}

export default GameplayPage;
