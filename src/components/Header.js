import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <>
      <div className="flex justify-between bg-yellow-100 shadow-lg">
        <div className="flex items-center px-10 mx-5">
          <div className="m-2 px-6 py-2 rounded-lg bg-slate-200">
       <b>LOGO</b>
       </div>
        </div>

        <div className="flex items-center px-10 mx-5">
          <ul className="flex p-4 m-4">
            <li className="px-4">
              <Link to="./">Home</Link>
            </li>
            <li className="px-4">
              <Link to="./contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
