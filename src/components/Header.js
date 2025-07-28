import { useState, useEffect } from "react";
import logo from "../utils/images/logo.png";
import defaultProfile from "../utils/images/profile.png"; // Add a default profile image
import { Link } from "react-router-dom";
import CartIcon from "./CartIcon";
import { Phone, Lock, X } from "lucide-react";

const Header = () => {
  const [user, setUser] = useState(null);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false); // Toggle profile dropdown

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(savedUser);
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const username = "Harshika"; // Mock user name
    setUser(username);
    setIsLoggedIn(true);
    localStorage.setItem("user", username);
    setShowLoginForm(false);
  };

  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
    setShowProfileMenu(false);
    localStorage.removeItem("user");
  };

  return (
    <div className="flex justify-around shadow-md relative">
      <Link to="">
        <div className="w-16 my-3 cursor-pointer">
          <img src={logo} alt="Logo" />
        </div>
      </Link>
      <div className="flex">
        <ul className="flex m-2">
          <li className="py-3 px-5 hover:text-pink-400 hover:cursor-pointer my-2 font-bold">
            <Link to="">Home</Link>
          </li>
          <li className="py-3 px-5 hover:text-pink-400 hover:cursor-pointer my-2 font-bold">
            <Link to="/about">About</Link>
          </li>
          {/* <li className="py-3 px-5 hover:text-pink-400 hover:cursor-pointer my-2 font-bold">
            <Link to="/grocery">Grocery</Link>
          </li> */}
          <li className="py-3 px-5 hover:text-pink-400 hover:cursor-pointer my-2 font-bold relative">
            {isLoggedIn ? (
              <div className="relative">
                <div
                  className="flex items-center space-x-2 cursor-pointer"
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                >
                  <img
                    src={defaultProfile}
                    alt="Profile"
                    className="w-8 h-8 rounded-full"
                  />
                  <span>{user}</span>
                </div>

                {/* Profile Dropdown Menu */}
                {showProfileMenu && (
                  <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg p-2">
                    <p className="text-center text-gray-700 font-bold">
                      {user}
                    </p>
                    <button
                      onClick={handleLogout}
                      className="mt-2 w-full bg-pink-500 text-white p-2 rounded text-sm hover:bg-pink-600"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <span onClick={() => setShowLoginForm(true)}>Login</span>
            )}
          </li>
          <li className="py-3 px-5 hover:text-pink-400 hover:cursor-pointer my-2 font-bold">
            <Link to="/cart">
              <CartIcon />
            </Link>
          </li>
        </ul>
      </div>

      {/* Sliding Login Form */}
      {showLoginForm && (
        <div className="fixed inset-0 flex justify-center items-center bg-black/50 z-50">
          <div className="bg-white p-8 rounded-2xl shadow-2xl w-96 relative">
            <h2 className="text-2xl font-bold text-center text-pink-600">
              Welcome!
            </h2>
            <form onSubmit={handleLogin} className="space-y-4 mt-4">
              <div className="flex items-center border border-gray-300 p-3 rounded-lg">
                <Phone className="text-gray-500 mr-2" size={20} />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full outline-none text-gray-700"
                  required
                />
              </div>
              <div className="flex items-center border border-gray-300 p-3 rounded-lg">
                <Lock className="text-gray-500 mr-2" size={20} />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full outline-none text-gray-700"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-pink-500 text-white font-bold p-3 rounded-lg hover:bg-pink-600"
              >
                Login
              </button>
            </form>
            <div className="text-center mt-4">
              <button className="text-sm text-gray-500 hover:underline">
                Forgot Password?
              </button>
              <p className="text-sm mt-2">
                Don't have an account?{" "}
                <button className="text-pink-500 font-bold hover:underline">
                  Sign Up
                </button>
              </p>
            </div>
            <button
              onClick={() => setShowLoginForm(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
