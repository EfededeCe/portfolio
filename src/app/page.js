import { NavBar } from "@/ui/components/NavBar";
import Image from "next/image";
import { Hero } from "@/ui/components/Hero";
import { Card } from "@/ui/components/cards/Card";
import { GridCard } from "@/ui/components/cards/GridCard";

export default function Home() {
  return (
    <>
      <Hero />
      <GridCard />
    </>
  );
}
