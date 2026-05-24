import Hero from "./components/hero";
import FlavorExperience from "./components/FlafourExperience";
import FAQ from "./components/Faq";
import BecomeReseller from "./components/BecomeReseller";
import Product from "./components/Product";

export default function HomePage() {
  return (
    <>
      <Hero />
      {/* <WhyUs /> */}
      <FlavorExperience />
      <Product />
      {/* <StatsSection /> */}
      <FAQ />
      <BecomeReseller />
    </>
  );
}
