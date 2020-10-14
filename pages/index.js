import Head from "next/head";
import Fade from "react-reveal/Fade";
import React, { useState } from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { GrFormClose } from "react-icons/gr";

// Component
// import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Background from "../components/Background";

export default function Home() {
  const [active, setActive] = useState(false);
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
      <nav>
        <div className="container navContent">
          <img src="/Logo.svg" alt="" />
          <button className="btnNavbar" onClick={handleShow}>
            {active ? <GrFormClose /> : <FaBars />}
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
        </div>
      </nav>
      {/* End Navbar */}
      <Hero />
      <About />
      <Background />
    </section>
  );
}
