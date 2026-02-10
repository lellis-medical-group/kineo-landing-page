import type { Route } from "./+types/home";
import PartnersSection from "~/components/section/PartnersSection";
import HeroSection from "~/components/section/HeroSection";
import FeaturesSection from "~/components/section/FeaturesSection";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {

  return (
    <div className="min-h-screen">
      <HeroSection />
      <PartnersSection />
      <FeaturesSection />
    </div>
  )
}
