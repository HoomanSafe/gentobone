import React from "react";
import logo from "../assets/logo.png";

const Hero = () => {
  return (
    <section className="pt-[150px] pb-[50px] w-full text-white">
      <div className="container grid lg:grid-cols-2 gap-10 ">
        <div className="flex text-center flex-col gap-10 justify-center items-center">
          <h3 className="text-xl text-red uppercase font-bold text-center">
            The Hilariously Scarcely Tokenized Meme Extravaganza!
          </h3>
          <h1 className="text-3xl md:text-5xl font-bold leading-relaxed">
            Hold onto your funny bones and get ready to dive into the wacky
            world of Rare Pepe 2.0!
          </h1>
          <div className="flex flex-col md:justify-between w-full md:flex-row gap-5">
            <a
              href="https://dexscreener.com/ethereum/0x4f95c9a2f21c5d1b7c24d1c8dc2821f7f67ecfaa"
              target="_blank"
              className="px-6 py-3 border border-red rounded-3xl font-semibold capitalize hover:text-white hover:bg-red"
            >
              view chart
            </a>
            <a
              href="https://t.me/RarePepe20"
              target="_blank"
              className="px-6 py-3 border border-red bg-red hover:bg-transparent hover:border-white rounded-3xl font-semibold capitalize hover:text-white hover:bg-red"
            >
              telegram
            </a>
          </div>
        </div>
        <img src={logo} alt="" className="rounded-full" />
      </div>
    </section>
  );
};

export default Hero;
