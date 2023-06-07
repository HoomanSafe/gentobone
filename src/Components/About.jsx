import React from "react";

const About = () => {
  return (
    <section className="py-[50px] w-full bg-red">
      <div className="container flex justify-center items-center text-center flex-col gap-7">
        <h1 className="text-5xl text-primary uppercase font-bold">
          about rare pepe
        </h1>
        <p className="text-xl md:text-2xl mt-10">
          Rare Pepe is a unique and innovative crypto project built on the
          Ethereum blockchain that aims to revolutionize digital collectibles
          and bring the concept of rare art into the world of blockchain
          technology. Inspired by the popular internet meme known as Pepe the
          Frog, Rare Pepe introduces a new dimension to the crypto space by
          combining humor, art, and blockchain technology.
        </p>
      </div>
    </section>
  );
};

export default About;
