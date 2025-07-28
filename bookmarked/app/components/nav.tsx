


import Image from "next/image";

export default function Navbar() {
    return (
  <div className="navbar bg-base-100 shadow-sm h-20 px-4">
    <div className="navbar-start h-full flex items-center">
      <img src="bookmarked.svg" className="h-1/2" />
    </div>
    
    <div className="navbar-end">
      <ul className="menu menu-horizontal px-1">
        <li><a>Link</a></li>
        <li>
          <details>
            <summary>Parent</summary>
            <ul className="bg-base-100 rounded-t-none p-2">
              <li><a>Link 1</a></li>
              <li><a>Link 2</a></li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
  </div>
);

}
