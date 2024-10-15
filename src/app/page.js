import { Hero } from "@/ui/components/Hero";
import { GridCard } from "@/ui/components/cards/GridCard";
import { Divider } from "@/ui/components/Divider";
import { Chat } from "@/ui/components/Chat";

export default function Home() {
  return (
    <>
      <Hero />
      <Divider id={"proyectos"} text={"Experiencia Laboral"} />
      <GridCard />
      {/* <Divider id={"otros"} text={"Otros Proyectos"} /> */}
      <Divider id={"sobre-mi"} text={"Sobre Mi"} />
      <Chat />
    </>
  );
}
