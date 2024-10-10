"use client";
import Image from "next/image";
import { useState } from "react";

export const Card = ({ nombre, descripcion, detalle, img }) => {
  const [showDesc, setShowDesc] = useState(false);

  const handleShowDesc = () => setShowDesc(!showDesc);

  if (showDesc) {
    console.log("show");
  }

  return (
    <>
      <div
        className={`card bg-base-100 image-full w-96 shadow-xl mx-auto lg:my-3 sm:my-3 my-0 max-h-80`}
      >
        <figure>
          <Image
            src={
              img
                ? img
                : "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            }
            width={500}
            height={50}
            alt="Exp."
          />
        </figure>

        <div
          className={`card-body ${
            showDesc ? "opacity-20" : "opacity-100"
          } transition-opacity duration-300 z-10`}
        >
          <>
            <h2 className="card-title">{nombre}</h2>
            <p>{descripcion}</p>
            <div className="card-actions justify-end">
              <button
                className="btn btn-primary opacity-100"
                onClick={handleShowDesc}
              >
                Detalle
              </button>
            </div>
          </>
        </div>

        {/* <div
          className={`absolute top-0 left-0 h-full w-full bg-base-100 z-30 p-5 transition-transform duration-300 transform ${
            showDesc
              ? " translate-x-0 z-20"
              : "opacity-0 -translate-x-[100vw] z-0"
          }`}
        > */}
        {/* <div
          className={`absolute top-0 left-0 h-full w-full content-center bg-base-100 z-30 p-5 transition-transform duration-300 transform ${
            showDesc
              ? " translate-x-0 z-20"
              : "opacity-0 -translate-x-[100vw] z-0"
          }`}
        >
          <p className="bg-slate-400 p-4 min-h-10 rounded-t-xl">{detalle}</p>
          <div className="card-actions justify-end bg-slate-400 p-4  rounded-b-xl">
            <button className="btn btn-primary" onClick={handleShowDesc}>
              Atrás
            </button>
          </div>
        </div> */}
      </div>
    </>
  );
};
