import Chessboard from "../components/Chessboard";
import HomeButton from "../components/HomeButton";
import Navbar from "../components/Navbar";

export default function HomePage () {
    return <>
    < Navbar/>
    <div className="flex flex-wrap justify-center items-center">
    < HomeButton/>
    </div>
    
    </>
}