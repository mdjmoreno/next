"use client";
import Link from "next/link";
const NavBar = () => {
  
 

  return (
    <nav className="bg-blue-500 p-4">
    <ul className="flex space-x-4">
      <li>
        <Link href="/create">Create Order</Link>
      </li>
      <li>
        <Link href="/list">Orders</Link>
      </li>
    </ul>
  </nav>
  );
};

export default NavBar;
