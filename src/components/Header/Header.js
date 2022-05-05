import React from "react";
import { Link } from "react-router-dom";
import CustomLink from "../custom/CustomLink"

const Header = () => {
  return (
    <div>
      <nav className="w-full h-16 flex justify-center items-center my-4">
        <ul className="flex text-white font-bold">
          <li className="ml-3 bg-orange-300 px-3 py-1 rounded text-white no-underline">
            <CustomLink to="/">Home</CustomLink>
          </li>
          <li className="ml-3 bg-orange-300 px-3 py-1 rounded">
            <CustomLink to="/order-review">Order Review</CustomLink>
          </li>
          <li className="ml-3 bg-orange-300 px-3 py-1 rounded">
            <CustomLink to="/friends">Friends</CustomLink>
          </li>
          <li className="ml-3 bg-orange-300 px-3 py-1 rounded">
            <CustomLink to="/posts">Posts</CustomLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
