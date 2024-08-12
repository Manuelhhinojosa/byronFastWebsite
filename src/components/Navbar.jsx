import React from "react";

// React icons
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

// images

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <div className="text-white mx-2 w-10">BF</div>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin />
        <FaSquareXTwitter />
        <FaInstagram />
      </div>
    </nav>
  );
};

export default Navbar;
