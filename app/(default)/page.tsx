export const metadata = {
  title: "TitanFit",
  description:
    "Personal trainers escolhem o TitanFit para expandir rapidamente seus negócios de treinamento pessoal online. Comece gratuitamente.",
};

import Hero from "@/components/hero";
import Features from "@/components/features";
import Zigzag from "@/components/zigzag";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Zigzag />
      {/* <Testimonials /> */}
    </>
  );
}
