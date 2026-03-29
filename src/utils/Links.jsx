import React from "react";

function Links({ url }) {
  return (
    <div>
      <li className="text-2xl text-green-500">
        <a className="hover:text-blue-500" href={url}>
          Link
        </a>
      </li>
    </div>
  );
}

export default Links;
