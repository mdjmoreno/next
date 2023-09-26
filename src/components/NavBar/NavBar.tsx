"use client";
import Link from "next/link";
const NavBar = () => {
  
 

  return (
    <nav className='flex'>
      <ul className=''>
        <li>
          <Link href="/home">CreateOrder</Link>
        </li>
        <li>
          <Link href="/orders">Orders</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
