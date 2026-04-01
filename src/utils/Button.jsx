import React from "react";

function Button({ text, url = "#" }) {
  return (
    <div className="hover:-translate-y-1 duration-300 transition-all">
      <a href={url} className="bg-linear-to-r from-purple-600 to-fuchsia-500 py-2 
      px-4 font-bold rounded-3xl text-white  cursor-pointer ">
        {text}
      </a>
    </div>
  );
}

export default Button;
