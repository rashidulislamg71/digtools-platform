import React from "react";
import Logo from "../../utils/Logo";
import { FiMenu, FiShoppingCart } from "react-icons/fi";
import Button from "../../utils/Button";

// navData
const navItems = [
  {
    id: 1,
    title: "Products",
    path: "/", // optional: you can add an icon component
  },
  {
    id: 2,
    title: "Features",
    path: "/features",
  },
  {
    id: 3,
    title: "Pricing",
    path: "/pricing",
  },
  {
    id: 4,
    title: "Testimonials",
    path: "/testimonials",
  },
  {
    id: 5,
    title: "FAQ",
    path: "/faq",
  },
];

function NavBar() {
  return (
    <div className="flex items-center justify-between bg-gray-50 py-4 px-6">
      <Logo />

      <ul className="flex gap-6">
        {navItems.map((item) => (
          <li key={item.id}>
            <a className="hover:text-violet-600 font-bold" href={item.path}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex justify-center items-center gap-5">
        <div className="relative font-bold cursor-pointer">
          <span className="absolute font-bold -top-3.5 left-3 text-violet-600">
            0
          </span>
          <FiShoppingCart className="text-2xl hover:text-violet-600" />
        </div>
        <button className=" font-bold cursor-pointer hover:text-violet-500">
          Login
        </button>
        <Button text="Get Started" />
      </div>
      {/* menu humburger icon for mobile view */}
      <button className="text-2xl cursor-pointer hover:text-violet-600">
        <FiMenu />
      </button>
    </div>
  );
}

export default NavBar;
