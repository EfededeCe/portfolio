export const Hero = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
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
            Desarrollo soluciones para integrar la web con el mundo real y
            avanzar camino a la digitalización, principalmente con tecnologías
            del ecosistema <span className=" text-yellow-200">JavaScript</span>,
            como
            <span className="font-thin text-yellow-200">
              {" "}
              Node.js, Express, React, Next.js
            </span>
            . Además, he trabajado en algunos proyectos con{" "}
            <span className=" text-green-200">Python</span> realizando APIs con
            su framework{" "}
            <span className="font-thin text-green-200">Django</span>.
          </p>
          <p className="pb-6 px-2 text-start">
            Podés conocer a cerca de mis trabajos acá y para más detalles en mi
            <a
              target="blank"
              href={"https://github.com/EfededeCe"}
              className="underline font-bold"
            >
              {" "}
              git
            </a>
            . Si querés que
            <a
              target="blank"
              href={"https://linkedin.com/in/federico-del-corro-b49501236"}
              className="underline font-bold"
            >
              {" "}
              trabajemos juntos
            </a>
            , o tenés alguna consulta, no dudes en hacérmela llegar por mis
            redes.
          </p>
          <a href="/#proyectos" className="">
            <button className="btn btn-primary shadow shadow-green-800">
              Experiencias
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
