import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-xl p-6 lg:overflow-visible px-10">
          <div className="-m-6 max-h-[768px] w-[calc(100%+48px)] overflow-scroll">
            <nav className="sticky top-0 z-10 block w-full max-w-full px-4 py-2 text-black bg-white border rounded-none shadow-md h-max border-white/80 bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4 rounded-xl">
              <div className="flex items-center justify-between text-blue-gray-900">
                <a
                  href="/home"
                  className="mr-4 block cursor-pointer py-1.5 font-sans text-base font-medium leading-relaxed text-inherit antialiased"
                >
                  Chess Mania
                </a>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-x-1">
                    <button
                      className="hidden select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
                      type="button"
                      onClick={() => {
                        localStorage.removeItem("access_token");
                        navigate("/");
                      }}
                    >
                      <span> Logout</span>
                    </button>
                  </div>
                  <button
                    className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
                    type="button"
                  >
                    <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
