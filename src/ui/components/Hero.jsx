export const Hero = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold ">Federico del Corro</h1>
          <p className="pt-6 font-semibold">¡Hola estimad@!</p>
          <p className="py-6 ">
            Soy Fede, desarrollador web full stack. Trabajo principalmente con
            tecnologías del ecosistema{" "}
            <span className=" text-yellow-200">JavaScript</span>, como
            <span className="font-thin"> Node.js, Express, React, Next.js</span>
            . Además, he trabajado en algunos proyectos con{" "}
            <span className=" text-green-200">Python</span> realizando APIs con
            su framework <span className="font-thin">Django</span>.
          </p>
          <p className="pb-6">
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
            <span className="font-extrabold"> trabajemos juntos</span>, o tenés
            alguna consulta, no dudes en hacermela llegar por mis redes.
          </p>
          <button className="btn btn-primary">Proyectos</button>
        </div>
      </div>
    </div>
  );
};
