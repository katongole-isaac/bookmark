import React from "react";
import "./sass/index.scss";
import Navbar from "./components/Navbar";
import Showcase from "./components/Showcase";
import FAQ from "./components/FAQ";
import Browsers from "./components/Browsers";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Features from "./components/Features";

export default function () {
  return (
    <>
      <header>
        <Navbar />
        <Intro />
      </header>
      <main>
        <Features />
        <Browsers />
        <FAQ />
        <Showcase />
      </main>
      <Footer />
    </>
  );
}
