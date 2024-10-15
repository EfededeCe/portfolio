import {
  Django,
  GitHub,
  JavaScript,
  LinkedIn,
  Linux,
  Python,
  React,
} from "@/ui/icons";

export const Hero = () => {
  return (
    <div id={"hero"} className="hero bg-base-100 bg-opacity-40 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md mt-24">
          <h1 className="text-5xl font-bold text-slate-200">
            Federico del Corro
          </h1>
          <h2 className="text-xl font-bold mt-4 text-slate-300">
            Full Stack Developer
          </h2>
          <p className="pt-14 font-semibold">¡Hola estimad@!</p>
          <p className="py-6 px-2 text-start">
            Desarrollo soluciones para{" "}
            <span className="font-bold">integrar la web con el mundo real</span>{" "}
            y avanzar camino a la digitalización, principalmente con tecnologías
            del ecosistema <span className="text-yellow-200">JavaScript</span>,
            contando con
            <span className="font-bold"> más de 3 años</span> de experiencia y
            en los últimos 2, he trabajado en algunos proyectos con{" "}
            <span className="text-green-200">Python</span>.
          </p>

          <div className="flex mb-10 md:px-10 gap-14">
            <React
              width={"2em"}
              height={"2em"}
              className={
                "hover:scale-125 transition hover:bg-white/10 rounded-full text-white"
              }
            />
            <JavaScript
              width={"2em"}
              height={"2em"}
              className={
                "hover:scale-125 transition hover:bg-white/10 rounded-lg"
              }
            />
            <Linux
              width={"2em"}
              height={"2em"}
              fill={"#fff"}
              className={
                "hover:scale-125 transition hover:bg-white/10 rounded-full"
              }
            />
            <Python
              width={"2em"}
              height={"2em"}
              className={
                "hover:scale-125 transition hover:bg-white/10 rounded-full"
              }
            />
            <Django
              width={"2em"}
              height={"2em"}
              className={
                "hover:scale-125 transition hover:bg-white/10 rounded-full"
              }
            />
          </div>
          <a href="/#proyectos">
            <button className="btn btn-primary shadow shadow-green-800 px-10">
              Trabajo
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
