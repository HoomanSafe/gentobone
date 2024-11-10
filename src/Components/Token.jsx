import React from "react";
import Pepe from "../assets/logo1.png";

const Token = () => {
  return (
    <section className="py-[50px] w-full">
      <div className="container flex justify-center items-center text-center flex-col gap-7">
        <h1 className="text-5xl text-white uppercase font-bold">tokenomics</h1>
        <p className="text-xl md:text-2xl mt-20">2,000 Tsupply</p>
        <p className="text-xl md:text-2xl">5% buy tax</p>
        <p className="text-xl md:text-2xl">5% sell tax</p>

        {/* <div id="dexscreener-embed" className="mt-32">
          <iframe src="https://dexscreener.com/ethereum/0x687f721fbd06647255831EF17c455435966D0170?embed=1&theme=dark&trades=0&info=0"></iframe>
        </div> */}

        <img src={Pepe} alt="" className="md:w-[25rem]" />
      </div>
    </section>
  );
};

export default Token;
