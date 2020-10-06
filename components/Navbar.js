import Link from "next/link";
// import Style from "../styles/Navbar.module.scss";
import React, { useState } from "react";

export default function Navbar(props) {
  const [active, setActive] = useState(true);
  const handleShow = () => {
    setActive(!active);
    props.handleNavbar(active);
  };

  return (
    <nav className="container navContent">
      <img src="/Logo.svg" alt="" />
      <button className="btnNavbar" onClick={handleShow}>
        navbar
      </button>
      <ul className={`navList ${active && "navListActive"}`}>
        <li className="navListItem">
          <Link href="/">
            <a className="navListLink">About</a>
          </Link>
        </li>
        <li className="navListItem">
          <Link href="/">
            <a className="navListLink">How</a>
          </Link>
        </li>
        <li className="navListItem">
          <Link href="/">
            <a className="navListLink">Our Activity</a>
          </Link>
        </li>
        <li className="navListItem">
          <Link href="/">
            <a className="navListLink">Product</a>
          </Link>
        </li>
        <li className="navListItem">
          <Link href="/">
            <a className="navListLink">Contact</a>
          </Link>
        </li>
        <li className="navListItem">
          <Link href="/">
            <a className="navListLink donate">Donation</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
