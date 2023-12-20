import { Link } from "react-router-dom";

function HomeButton() {
  return (

    <Link to={`/gameplay`}><div className="card w-96 bg-base-100 shadow-xl image-full mt-[100px]">
      <figure>
        <img
          src="https://images.unsplash.com/photo-1604948501466-4e9c339b9c24?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Shoes"
        />
      </figure>
      <div className="py-[200px] card-body items-center justify-center">
        <h2 className="card-title">Play Now!</h2>
        <p>Playing with your friends</p>
      </div>
    </div>
    </Link>
  );
}

export default HomeButton;
