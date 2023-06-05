import React from "react";

const Token = () => {
  return (
    <section className="py-[50px] w-full">
      <div className="container flex justify-center items-center text-center flex-col gap-7">
        <h1 className="text-5xl text-white uppercase font-bold">tokenomics</h1>
        <p className="text-xl md:text-2xl mt-20">1,000,000,000 supply</p>
        <p className="text-xl md:text-2xl">0% buy tax</p>
        <p className="text-xl md:text-2xl">0% sell tax</p>
        <p className="text-xl md:text-2xl"> 2% max wallet</p>

        <div id="dexscreener-embed" className="mt-32">
          <iframe src="https://dexscreener.com/zksync/0x80115c708E12eDd42E504c1cD52Aea96C547c05c?embed=1&theme=dark&trades=0&info=0"></iframe>
        </div>
      </div>
    </section>
  );
};

export default Token;
