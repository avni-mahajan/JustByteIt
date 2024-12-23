import { useState, useContext } from "react";
import logo from "../utils/images/logo.png";
import { Link } from "react-router-dom";
import CartIcon from "./CartIcon";

const Header = () => {
  const [buttonClick, setbuttonClick] = useState(["Login"]);

  return (
    <div className="flex justify-around shadow-md">
      <div className="w-16 my-3">
        <img src={logo} />
      </div>
      <div className="flex">
        <ul className="flex m-2 ">
          <li className="py-3 px-5 hover:text-pink-400 hover:cursor-pointer my-2 font-bold">
            <Link to=""> Home</Link>
          </li>
          <li className="py-3 px-5 hover:text-pink-400 hover:cursor-pointer my-2 font-bold">
            <Link to="/about">About</Link>
          </li>
          <li className="py-3 px-5 hover:text-pink-400 hover:cursor-pointer my-2 font-bold">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li
            className="py-3 px-5 hover:text-pink-400 hover:cursor-pointer my-2 font-bold"
            onClick={() => {
              buttonClick === "Login"
                ? setbuttonClick("Logout")
                : setbuttonClick("Login");
            }}
          >
            {buttonClick}
          </li>
          <li className="py-3 px-5 hover:text-pink-400 hover:cursor-pointer my-2 font-bold">
            <Link to="/cart">
              <CartIcon />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
