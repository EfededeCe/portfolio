import { Hero } from "@/ui/components/Hero";
import { GridCard } from "@/ui/components/cards/GridCard";
import { Divider } from "@/ui/components/Divider";
import { ChatBubble } from "@/ui/components/ChatBubble";

export default function Home() {
  return (
    <>
      <Hero />
      <Divider id={"proyectos"} text={"Experiencia Laboral"} />
      <GridCard />
      {/* <Divider id={"otros"} text={"Otros Proyectos"} /> */}
      <Divider id={"sobre-mi"} text={"Sobre Mi"} />
      <ChatBubble />
    </>
  );
}
