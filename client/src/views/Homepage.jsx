import Chessboard from "../components/Chessboard";
import Navbar from "../components/Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <div className="flex flex-wrap justify-center items-center">
        <Chessboard />
      </div>
    </>
  );
}
