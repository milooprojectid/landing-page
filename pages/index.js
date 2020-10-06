import Head from "next/head";
import Fade from "react-reveal/Fade";
import React, { useState } from "react";
import Link from "next/link";

// Component
// import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";

export default function Home() {
  const [active, setActive] = useState(true);
  const handleShow = () => {
    setActive(!active);
  };
  return (
    <section className={active ? "homePage homeNav" : "homePage"}>
      <Head>
        <title>Miloo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Navbar */}
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
      <Hero />
      <About />
    </section>
  );
}
