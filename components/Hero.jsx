"use client";
import React from "react";
import Products from "./Products";
import heroImage from "../components/shop.svg";
import Image from "next/image";
const Hero = () => {
  return (
    <div className="container mx-auto">
      <div className="grid h-screen grid-cols-5 items-center">
        <div className="col-span-3">
          <h1 className="mb-3 text-4xl font-extrabold">
            Unleash Your Style: Dive <br /> into Our{" "}
            <span className="text-primary">Exclusive</span> <br />
            Collection Today!
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id laborum
            voluptate dolores? Ullam nulla adipisci cupiditate. Magnam
            consectetur assumenda temporibus facere dignissimos ut libero
            quibusdam, amet, incidunt error perferendis nobis excepturi quos
            esse ad distinctio itaque provident consequuntur soluta dolores.
          </p>
        </div>
      </div>
      <Products />
    </div>
  );
};

export default Hero;
