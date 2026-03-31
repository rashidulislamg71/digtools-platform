import React, { useState } from "react";
import Logo from "../../utils/Logo.jsx";
import { FiMenu, FiShoppingCart, FiX } from "react-icons/fi";
import Button from "../../utils/Button";

const navItems = [
  { id: 1, title: "Products", path: "/" },
  { id: 2, title: "Features", path: "/features" },
  { id: 3, title: "Pricing", path: "/pricing" },
  { id: 4, title: "Testimonials", path: "/testimonials" },
  { id: 5, title: "FAQ", path: "/faq" },
];

const navLinks = (
  <>
    {navItems.map((item) => (
      <li key={item.id}>
        <a className="hover:text-violet-600 font-bold" href={item.path}>
          {item.title}
        </a>
      </li>
    ))}
  </>
);

function NavBar({ cartItems }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div
      className="bg-gray-50 "
    >
      <div className="flex items-center justify-between relative px-4 md:px-8 lg:px-16 
      py-4 z-10">
        <div className="flex items-center gap-1">
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-xl"
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>

          <Logo />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-6">{navLinks}</ul>
        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute top-16  w-full bg-violet-200 p-4 z-0
  transition-all duration-300 ease-in-out
  ${isMenuOpen ? "left-0 " : "-left-1000 "}
`}
        >
          <ul className="flex flex-col gap-4">{navLinks}</ul>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-5">
          <div className="relative font-bold cursor-pointer">
            <span className="absolute -top-3 left-3  bg-orange-500 px-1.5 text-[12px] rounded-full text-white">{cartItems.length === 0 ? "" : cartItems.length}</span>
            <FiShoppingCart className="text-2xl hover:text-violet-600" />
          </div>

          <button className="hidden md:block font-bold hover:text-violet-500">
            Login
          </button>

          <div className="">
            <Button text="Get Started" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
