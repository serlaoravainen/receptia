"use client";

import { motion } from "framer-motion";

export default function UseCases() {
  const useCases = [
    {
      industry: "Ravintolat",
      description: "Pöytävaraukset, menu-kyselyt ja tilausten vastaanotto automaattisesti.",
    },
    {
      industry: "Klinikat & Terveyskeskukset",
      description: "Ajanvaraukset, potilaskysymykset ja päivystysneuvonta.",
    },
    {
      industry: "Kauneushoitolat",
      description: "Aikavaraushallinta, palvelutiedustelut ja asiakasneuvonta.",
    },
    {
      industry: "Kiinteistöhuolto",
      description: "Vikailmoitusten vastaanotto, aikataulutus ja asiakasviestintä.",
    },
    {
      industry: "Lakitoimistot",
      description: "Asiakastapaamisten aikataulutus ja alustava konsultointi.",
    },
    {
      industry: "Autoliikkeet",
      description: "Huoltovaraukset, kyselyt ja asiakaspalvelu.",
    },
  ];

  return (
    <section id="kayttotapaukset" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              Käyttötapaukset
            </h2>
            <p className="max-w-[900px] text-lg text-muted-foreground md:text-xl lg:text-2xl">
              Receptia palvelee monia eri toimialoja
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl border border-foreground/10 bg-card p-8 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="space-y-2">
                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{useCase.industry}</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {useCase.description}
                </p>
              </div>
              {/* Decorative corner element */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
