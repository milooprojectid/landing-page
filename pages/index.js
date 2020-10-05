import Head from "next/head";
import Fade from "react-reveal/Fade";

// Component
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";

export default function Home() {
  return (
    <section className="homePage">
      <Head>
        <title>Miloo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <About />
    </section>
  );
}
