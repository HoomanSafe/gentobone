import React from "react";
import Pepe from "../assets/pepe.png";
import Pepe1 from "../assets/1.png";

const About = () => {
  return (
    <section className="py-[50px] relative w-full bg-red">
      <div className="container flex justify-center items-center text-center flex-col gap-7">
        <h1 className="text-5xl text-primary uppercase font-bold">
          about rare pepe
        </h1>
        <img src={Pepe1} alt="" className="w-[15rem] right-0 bottom-0" />

        <p className="text-xl md:text-2xl mt-10">
          Picture this: Rare Pepe, a digital currency that trades in giggles
          rather than dollars. Instead of serious financial transactions, users
          engage in uproarious exchanges of rare memes that'll leave your sides
          splitting. These one-of-a-kind tokens represent the pinnacle of meme
          artistry, featuring Pepe the Frog in the most outrageous and
          sidesplitting scenarios you can imagine.
        </p>

        <p className="text-xl md:text-2xl mt-10">
          How does it work? Well, imagine stumbling upon a Rare Pepe token
          depicting a majestic Pepe in a tutu, gracefully pirouetting atop a
          banana peel. Or perhaps you'll find a limited edition Rare Pepe where
          Pepe's face is hilariously morphed with that of a rubber chicken. The
          possibilities are as endless as the internet's absurdity!
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
