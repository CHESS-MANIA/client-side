import Chessboard from "../components/Chessboard";
import HomeButton from "../components/HomeButton";
import Navbar from "../components/Navbar";

export default function HomePage() {
    return <>
        <div
            className="h-screen" style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1610633389918-7d5b62977dc3?q=80&w=3425&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                position: 'relative',
            }}
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            < Navbar />
            <div className="flex flex-wrap justify-center items-center">
                < HomeButton />
            </div>
        </div >

    </>
}