import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Features from "@/components/sections/Features";
import HowItWorks from "@/components/sections/HowItWorks";
import UseCases from "@/components/sections/UseCases";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Problem />
        <Features />
        <HowItWorks />
        <UseCases />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
