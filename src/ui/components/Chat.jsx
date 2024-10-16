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
    id: "a1",
  },
  {
    msg: (
      <p>
        Mmm... con que tacaño con las palabras Federico eh, bueno,{" "}
        <span className="font-extrabold">¿a qué te dedicas?</span>
      </p>
    ),
    who: "a",
    id: "b2",
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
    id: "c3",
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
    id: "d4",
  },
  {
    msg: (
      <p className="font-extrabold">¿Y con qué tecnologías sueles trabajar?</p>
    ),
    who: "a",
    id: "e5",
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
    id: "f6",
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
    id: "g7",
  },
  {
    msg: "Por último, también han sido de gran ayuda en mi formación los distintos trabajos en los que tuve la fortuna de poder participar, a veces sólo, a veces con un equipo, siempre buscando la mejor y más adecuada solución para cada momento, enfrentando los desafíos que van apareciendo en el camino para sacar adelante el proyecto.",
    who: "f",
    id: "h8",
  },
  {
    msg: <span className="font-extrabold">¿De dónde eres?</span>,
    who: "a",
    id: "i9",
  },
  {
    msg: (
      <p>
        Soy de <span className="font-bold">Argentina</span>, actualmente vivo en
        La Plata, capital de la Provincia de Buenos Aires.
      </p>
    ),
    who: "f",
    id: "j10",
  },
  {
    msg: <span className="font-extrabold">¿Qué estás buscando?</span>,
    who: "a",
    id: "k11",
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
    id: "l12",
  },
  {
    msg: "Estoy en la búsqueda de un trabajo en el que pueda aportar valor, desde mi lugar como desarrollador, mejorando sistemas o implementando nuevos, debatir sobre mejores prácticas y formas para que podamos realizar proyectos más ambiciosos y desafiantes juntos.",
    who: "f",
    id: "m13",
  },
];

export const Chat = () => {
  return (
    <section className="justify-center lg:max-w-5xl m-auto my-10 px-4 lg:px-40">
      {msgs.map((e) => (
        <ChatBubble key={e.id} {...e} />
      ))}
    </section>
  );
};
