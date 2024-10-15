import { ChatBubble } from "@/ui/components/bubbles/ChatBubble";
import {
  Bootstrap,
  Django,
  Docker,
  Expressjs,
  Git,
  GitHub,
  JavaScript,
  LinkedIn,
  Linux,
  MariaDB,
  MySQL,
  Nextjs,
  Node,
  Nodejs,
  PostgreSQL,
  Prisma,
  Python,
  React,
  TailwindCSS,
} from "@/ui/icons";

const msgs = [
  {
    msg: (
      <p>
        <span className="font-bold">¡Bienvenid@ a mi web personal!</span> Si has
        llegado hasta aquí, supongo que tendrás algunas preguntas, aunque sólo
        te concederé tres respuestas.
      </p>
    ),
    who: "f",
  },
  {
    msg: (
      <p>
        Mmm... con que tacaño con las palabras Federico eh, bueno,{" "}
        <span className="font-extrabold">¿a qué te dedicas?</span>
      </p>
    ),
    who: "a",
  },
  {
    msg: (
      <p>
        Soy <span className="font-bold">desarrollador web full stack</span>,
        trabajo principalmente con JavaScript, creando aplicaciones web que se
        puedan integrar en el cotidiano para plasmar una gran idea, facilitar
        una tarea, dar a conocer un potente mensaje, o simplemente por curiosear
        en la web.
      </p>
    ),
    who: "f",
  },
  {
    msg: (
      <p>
        Mi formación es principalmente{" "}
        <span className="font-bold">autodidacta</span>, aunque también curso la{" "}
        <span className="font-bold">
          Licenciatura en Sistemas de la Universidad Nacional de La Plata
        </span>{" "}
        desde el año 2023.
      </p>
    ),
    who: "f",
  },
  {
    msg: (
      <p className="font-extrabold">¿Y con qué tecnologías sueles trabajar?</p>
    ),
    who: "a",
  },
  {
    msg: (
      <p>
        En los últimos años conocí muchas tecnologías, algunas fueron quedando
        en <span className="font-bold">mi caja de herramientas</span> y con el
        tiempo me voy perfeccionando en su uso, algunas herramientas del día a
        día son:
      </p>
    ),
    who: "f",
  },
  {
    msg: (
      <ul className="">
        <li className="font-bold border rounded-full max-w-min px-4 py-2 inline-flex m-3">
          JavaScript{" "}
          <JavaScript
            width={"1.2em"}
            height={"1.2em"}
            className={"m-auto ml-4"}
          />
        </li>
        <li className="font-bold border rounded-full max-w-min px-4 py-2 inline-flex m-3">
          React{" "}
          <React width={"1.2em"} height={"1.2em"} className={"m-auto ml-4"} />
        </li>
        <li className="font-bold border rounded-full max-w-min px-4 py-2 inline-flex m-3">
          Next.JS{" "}
          <Nextjs width={"1.2em"} height={"1.2em"} className={"m-auto ml-4"} />
        </li>
        <li className="font-bold border rounded-full max-w-min px-4 py-2 inline-flex m-3">
          Node.JS{" "}
          <Nodejs width={"1.2em"} height={"1.2em"} className={"m-auto ml-4"} />
        </li>
        <li className="font-bold border rounded-full max-w-min px-4 py-2 inline-flex m-3">
          Express{" "}
          <Expressjs
            width={"1.2em"}
            height={"1.2em"}
            className={"m-auto ml-4"}
          />
        </li>
        <li className="font-bold border rounded-full max-w-min px-4 py-2 inline-flex m-3">
          Prisma{" "}
          <Prisma width={"1.2em"} height={"1.2em"} className={"m-auto ml-4"} />
        </li>
        <li className="font-bold border rounded-full max-w-min px-4 py-2 inline-flex m-3">
          Bootstrap{" "}
          <Bootstrap
            width={"1.2em"}
            height={"1.2em"}
            className={"m-auto ml-4"}
          />
        </li>
        <li className="font-bold border rounded-full max-w-min px-4 py-2 inline-flex m-3">
          Tailwind{" "}
          <TailwindCSS
            width={"1.2em"}
            height={"1.2em"}
            className={"m-auto ml-4"}
          />
        </li>
        <li className="font-bold border rounded-full max-w-min px-4 py-2 inline-flex m-3">
          Python{" "}
          <Python width={"1.2em"} height={"1.2em"} className={"m-auto ml-4"} />
        </li>
        <li className="font-bold border rounded-full max-w-min px-4 py-2 inline-flex m-3">
          Django{" "}
          <Django width={"1.2em"} height={"1.2em"} className={"m-auto ml-4"} />
        </li>
        <li className="font-bold border rounded-full max-w-min px-4 py-2 inline-flex m-3">
          Docker{" "}
          <Docker width={"1.2em"} height={"1.2em"} className={"m-auto ml-4"} />
        </li>
        <li className="font-bold border rounded-full max-w-min px-4 py-2 inline-flex m-3">
          Linux{" "}
          <Linux width={"1.2em"} height={"1.2em"} className={"m-auto ml-4"} />
        </li>
        <li className="font-bold border rounded-full max-w-min px-4 py-2 inline-flex m-3">
          MySQL{" "}
          <MySQL width={"1.2em"} height={"1.2em"} className={"m-auto ml-4"} />
        </li>
        <li className="font-bold border rounded-full max-w-min px-4 py-2 inline-flex m-3">
          PostgreSQL{" "}
          <PostgreSQL
            width={"1.2em"}
            height={"1.2em"}
            className={"m-auto ml-4"}
          />
        </li>
        <li className="font-bold border rounded-full max-w-min px-4 py-2 inline-flex m-3">
          MariaDB{" "}
          <MariaDB width={"1.2em"} height={"1.2em"} className={"m-auto ml-4"} />
        </li>
        <li className="font-bold border rounded-full max-w-min px-4 py-2 inline-flex m-3">
          Git <Git width={"1.2em"} height={"1.2em"} className={"m-auto ml-4"} />
        </li>
        <li className="font-bold border rounded-full max-w-min px-4 py-2 inline-flex m-3">
          GitHub{" "}
          <GitHub width={"1.2em"} height={"1.2em"} className={"m-auto ml-4"} />
        </li>
      </ul>
    ),
    who: "f",
  },
  {
    msg: "Por último, también han sido de gran ayuda en mi formación los distintos trabajos en los que tube la fortuna de poder participar, a veces sólo, a veces con un equipo, siempre buscando la mejor y más adecuada solución para cada momento, enfrentando los desafíos que van apareciendo en el camino para sacar adelante el proyecto.",
    who: "f",
  },
  {
    msg: <span className="font-extrabold">¿De dónde eres?</span>,
    who: "a",
  },
  {
    msg: (
      <p>
        Soy de <span className="font-bold">Argentina</span>, actualmente vivo en
        La Plata, capital de la Provincia de Buenos Aires.
      </p>
    ),
    who: "f",
  },
  {
    msg: <span className="font-extrabold">¿Qué estás buscando?</span>,
    who: "a",
  },
  {
    msg: (
      <p>
        Aunque fueron cuatro las preguntas, voy a contestar una más, si quieres
        tener una charla conmigo, contáctame a traves{" "}
        <a
          href="http://linkedin.com/in/federico-del-corro-b49501236"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
          <LinkedIn
            width={"1.2em"}
            height={"1.2em"}
            className={"m-auto ml-4 inline-flex"}
          />
        </a>
        .
      </p>
    ),
    who: "f",
  },
  {
    msg: "Estoy en la búsqueda de un trabajo en el que pueda continuar desarrollándome como profesional en el ámbito de la programación, donde cuente con la compañía de otros profesionales y podamos colaborar en proyectos más ambiciosos y desafiantes.",
    who: "f",
  },
];

export const Chat = () => {
  return (
    <section className="justify-center lg:max-w-5xl m-auto my-10 px-4 lg:px-40">
      {msgs.map((e) => (
        <ChatBubble {...e} />
      ))}
    </section>
  );
};
