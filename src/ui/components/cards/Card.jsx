"use client";
import Image from "next/image";

export const Card = ({ nombre, descripcion, img }) => {
  return (
    <>
      <div className="card bg-base-100 image-full w-96 shadow-xl mx-auto">
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
        <div className="card-body">
          <h2 className="card-title">{nombre}</h2>
          <p>{descripcion}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};
