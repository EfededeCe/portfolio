import { Card } from "./Card";
import { expLaborales } from "@/data";

export const GridCard = () => {
  return (
    <div className="grid lg:grid-cols-2  max-w-5xl mx-auto gap-10 lg:px-20">
      {expLaborales.map((e) => (
        <Card key={e.id} {...e} />
      ))}
    </div>
  );
};
