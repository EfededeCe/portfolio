import { Card } from "./Card";
import { expLaborales } from "@/data";

export const GridCard = () => {
  return (
    <div
      id={"proyectos"}
      className="grid lg:grid-cols-2  max-w-5xl mx-auto gap-10 lg:px-20 my-16 pt-24 min-h-screen"
    >
      {expLaborales.map((e) => (
        <Card key={e.id} {...e} />
      ))}
    </div>
  );
};
