"use client";
import Image from "next/image";
import { useState } from "react";
import {
  Bootstrap,
  Django,
  Docker,
  Expressjs,
  MySQL,
  Nextjs,
  PostgreSQL,
  Prisma,
  TailwindCSS,
} from "@/ui/icons";

export const Card = ({ nombre, descripcion, detalle, tecs, img }) => {
  const [showDesc, setShowDesc] = useState(false);

  const handleShowDesc = () => setShowDesc(!showDesc);

  if (showDesc) {
    console.log("show");
  }

  return (
    <>
      <div
        className={`card bg-base-100 image-full w-96  hover:shadow-secondary/30 hover:shadow-2xl mx-auto sm:my-3 max-h-80 md:hover:scale-110 transition delay-75 duration-300`}
      >
        <figure>
          <Image src={img ? img : ""} width={500} height={500} alt="Exp." />
        </figure>

        <div
          className={`card-body ${
            showDesc ? "opacity-20" : "opacity-100"
          } transition-opacity duration-300 z-10`}
        >
          <>
            <h2 className="card-title text-white">{nombre}</h2>
            <p className="font-bold text-white md:text-white/70 md:hover:text-white transition">
              {descripcion}
            </p>
            {/* <div className="flex gap-3 min-h-7 p-2 bg-white bg-opacity-10 content-between justify-evenly rounded-md"> */}
            <div className="flex gap-3 min-h-7 p-2 bg-slate-950 bg-opacity-50 min-w-full content-between justify-evenly rounded-lg">
              {tecs?.includes("next") ? (
                <Nextjs width={"2em"} height={"2em"} fill={"grey"} />
              ) : (
                ""
              )}
              {tecs?.includes("django") ? (
                <Django width={"2em"} height={"2em"} fill={"#aaa"} />
              ) : (
                ""
              )}
              {tecs?.includes("express") ? (
                <Expressjs width={"2em"} height={"2em"} fill={"#aaa"} />
              ) : (
                ""
              )}
              {tecs?.includes("mysql") ? (
                <MySQL width={"2em"} height={"2em"} fill={"#aaa"} />
              ) : (
                ""
              )}
              {tecs?.includes("postgresql") ? (
                <PostgreSQL width={"2em"} height={"2em"} fill={"#aaa"} />
              ) : (
                ""
              )}
              {tecs?.includes("prisma") ? (
                <Prisma width={"2em"} height={"2em"} fill={"#aaa"} />
              ) : (
                ""
              )}
              {tecs?.includes("docker") ? (
                <Docker width={"2em"} height={"2em"} fill={"#aaa"} />
              ) : (
                ""
              )}
              {tecs?.includes("tailwind") ? (
                <TailwindCSS width={"2em"} height={"2em"} fill={"#aaa"} />
              ) : (
                ""
              )}
              {tecs?.includes("bootstrap") ? (
                <Bootstrap width={"2em"} height={"2em"} fill={"#aaa"} />
              ) : (
                ""
              )}
            </div>
            {/* <div className="card-actions justify-end">
              <button
                className="btn btn-primary opacity-100"
                onClick={handleShowDesc}
              >
                Detalle
              </button>
            </div> */}
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
