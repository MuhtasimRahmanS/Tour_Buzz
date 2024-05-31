import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut().then().catch();
  };
  return (
    <div className="container mx-auto">
      <div className="container mx-auto   z-10 border-b-2 border-[#3DB043]">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#3DB043]  font-semibold text-lg rounded-xl px-2 py-2"
                        : "  font-medium text-lg  rounded-xl px-2 py-2"
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#3DB043]  font-semibold text-lg rounded-xl px-2 py-2"
                        : "  font-medium text-lg  rounded-xl px-2 py-2"
                    }
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/allSpot"
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#3DB043]  font-semibold text-lg rounded-xl px-2 py-2"
                        : "  font-medium text-lg  rounded-xl px-2 py-2"
                    }
                  >
                    All Spot
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/addSpot"
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#3DB043]  font-semibold text-lg rounded-xl px-2 py-2"
                        : "  font-medium text-lg  rounded-xl px-2 py-2"
                    }
                  >
                    Add Spot
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/myList"
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#3DB043]  font-semibold text-lg rounded-xl px-2 py-2"
                        : "  font-medium text-lg  rounded-xl px-2 py-2"
                    }
                  >
                    My List
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#3DB043]  font-semibold text-lg rounded-xl px-2 py-2"
                        : "  font-medium text-lg  rounded-xl px-2 py-2"
                    }
                  >
                    Contact
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/profile"
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#3DB043]  font-semibold text-lg rounded-xl px-2 py-2"
                        : "  font-medium text-lg  rounded-xl px-2 py-2"
                    }
                  >
                    Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/error"
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#3DB043]  font-semibold text-lg rounded-xl px-2 py-2"
                        : "  font-medium text-lg  rounded-xl px-2 py-2"
                    }
                  >
                    Error
                  </NavLink>
                </li>
              </ul>
            </div>
            <a className="text-[#3DB043] font-bold btn btn-ghost text-2xl md:text-3xl">
              TourBuzz
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal ">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#3DB043]  font-semibold text-lg rounded-xl px-2 py-2"
                      : "  font-medium text-lg  rounded-xl px-2 py-2"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#3DB043]  font-semibold text-lg rounded-xl px-2 py-2"
                      : "  font-medium text-lg  rounded-xl px-2 py-2"
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/allSpots"
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#3DB043]  font-semibold text-lg rounded-xl px-2 py-2"
                      : "  font-medium text-lg  rounded-xl px-2 py-2"
                  }
                >
                  All Spot
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/addSpot"
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#3DB043]  font-semibold text-lg rounded-xl px-2 py-2"
                      : "  font-medium text-lg  rounded-xl px-2 py-2"
                  }
                >
                  Add Spot
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/myList"
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#3DB043]  font-semibold text-lg rounded-xl px-2 py-2"
                      : "  font-medium text-lg  rounded-xl px-2 py-2"
                  }
                >
                  My List
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#3DB043]  font-semibold text-lg rounded-xl px-2 py-2"
                      : "  font-medium text-lg  rounded-xl px-2 py-2"
                  }
                >
                  Contact
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/error"
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#3DB043]  font-semibold text-lg rounded-xl px-2 py-2"
                      : "  font-medium text-lg  rounded-xl px-2 py-2"
                  }
                >
                  Error
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="navbar-end space-x-0 md:space-x-2">
            {user ? (
              <div className="flex gap-4">
                <Link to={"/profile"}>
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar tooltip tooltip-bottom z-20"
                    data-tip={user.displayName}
                  >
                    <div className="w-10 rounded-full">
                      <img
                        alt="Tailwind CSS Navbar component"
                        src={
                          user.photoURL ||
                          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                        }
                      />
                    </div>
                  </div>
                </Link>
                <div>
                  <button
                    onClick={handleSignOut}
                    className="px-2 py-2 rounded-xl text-white bg-[#3DB043]"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-x-1 flex">
                <Link to="/login">
                  <button className=" px-2 py-2 rounded-xl text-sm text-white  bg-[#3DB043]">
                    Login
                  </button>
                </Link>
                <Link to="/register">
                  <button className=" px-2 py-2 rounded-xl text-sm text-white  bg-[#3DB043]">
                    Register
                  </button>
                </Link>
              </div>
            )}
            <label className="cursor-pointer grid place-items-center">
              <input
                onChange={handleToggle}
                type="checkbox"
                className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
              />
              <svg
                className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <svg
                className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
