import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

export default function Register() {
  const navigate = useNavigate();

  const [formRegister, setFormRegister] = useState({
    userName: "",
    password: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post(
        "https://chess.wahyuragil.my.id/register",
        formRegister
      );

      navigate("/");
      toast.success('Register success!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    } catch (error) {

      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormRegister({
      ...formRegister,
      [name]: value,
    });
  };

  return (
    <>
      <div
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1610633389918-7d5b62977dc3?q=80&w=3425&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          position: 'relative',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="flex justify-center items-center h-screen">
          <div className="w-96 backdrop-blur-lg bg-opacity-80 rounded-lg shadow-lg p-5 bg-grey-600 text-white">
            <h2 className="text-2xl font-bold pb-5 text-white-950">
              {" "}
              Register{" "}
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-white-950"
                >
                  Username
                </label>
                <input
                  type="userName"
                  id="userName"
                  name="userName"
                  value={formRegister.userName}
                  onChange={handleChange}
                  className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                  placeholder="input your username"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-white-950"
                >
                  {" "}
                  Password{" "}
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formRegister.password}
                  onChange={handleChange}
                  className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                  placeholder="input your password"
                />
              </div>
              <div className="flex items-center justify-between mb-4">
                <button
                  type="submit"
                  className="text-white bg-gray-900 hover:bg-gray-700 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 px-5 w-full sm:w-auto"
                >
                  Submit
                </button>
                <div className="flex items-center text-sm text-white-950">
                  <p>already have an account?</p>
                  <Link to={"/login"}>
                    <p className="underline cursor-pointer ml-1 text-white-950">
                      Login
                    </p>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
