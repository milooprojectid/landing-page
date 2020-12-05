import Head from "next/head";
import Fade from "react-reveal/Fade";
import React, { useState } from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { GrFormClose } from "react-icons/gr";

import { getData } from "../utils/api";

// Component
// import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Background from "../components/Background";
import Work from "../components/Work";
import Event from "../components/Event";
import Product from "../components/Product";
import Footer from "../components/Footer";
import Blog from "../components/Blog";

export default function Home({ initialArticle }) {
  const [data, setData] = useState(initialArticle);
  const [active, setActive] = useState(false);
  const handleShow = () => {
    setActive(!active);
  };
  console.log(data);
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
      <Work />
      <Event />
      <Product />
      <Blog data={data} />
      <Footer />
    </section>
  );
}

export async function getServerSideProps() {
  const [initialArticle] = await Promise.all([getData()]);
  return { props: { initialArticle } };
}
