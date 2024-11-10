import React from "react";
import Pepe from "../assets/logo1.png";
import Pepe1 from "../assets/banner1.jpeg";

const About = () => {
  return (
    <section className="py-[50px] relative w-full bg-red">
      <div className="container flex justify-center items-center text-center flex-col gap-7">
        <h1 className="text-5xl text-primary uppercase font-bold">
          about Gento Bone
        </h1>
        <img src={Pepe1} alt="" className="w-[15rem] right-0 bottom-0" />

        <p className="text-xl md:text-2xl mt-10">
          $GENTO is not your average coin meme. 
          $GENTO is a meme with a limited supply and continues to circulate.
        </p>

        <p className="text-xl md:text-2xl mt-10">
          The main principle of design is that the output produced must not cause inflation. Instead, results are obtained from real activities that produce positive reinforcement that organically sustains the ecosystem.
          Combined with an updated decentralized governance structure, improved tokenomics and automatic burning.
        </p>
        <img
          src={Pepe}
          alt=""
          className="w-[7rem] right-0 rotate-3 bottom-0 animate-pulse"
        />
      </div>
    </section>
  );
};

export default About;
