import Chessboard from "../components/Chessboard";
import Navbar from "../components/Navbar";

function GameplayPage() {
  return (
    <>
      <div>
        <div className="h-screen"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1610633389918-7d5b62977dc3?q=80&w=3425&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            position: 'relative',
          }}
        >
          <div>
            <Navbar />
            <div className="flex justify-center items-center">
              <div className="z-10">
                <Chessboard boardStyle="rounded-lg shadow-md" />
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
      </div>
    </>
  );
}

export default GameplayPage;
