import { Card } from "./Card";
import { expLaborales } from "@/data";

export const GridCard = () => {
  return (
    <div className="grid lg:grid-cols-2  gap-10 lg:px-20">
      {expLaborales.map((e) => (
        <Card key={e.id} {...e} />
      ))}
    </div>
  );
};
