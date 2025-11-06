"use client";

import { motion } from "framer-motion";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Ota yhteyttä",
      description: "Kerro meille yrityksesi tarpeista ja vastaanoton vaatimuksista.",
    },
    {
      number: "02",
      title: "Räätälöinti",
      description: "Räätälöimme tekoälyvastaanoton yrityksesi tarpeisiin ja integroidaan se järjestelmiisi.",
    },
    {
      number: "03",
      title: "Testaus",
      description: "Testaat ja hyväksyt järjestelmän ennen käyttöönottoa.",
    },
    {
      number: "04",
      title: "Käyttöönotto",
      description: "Receptia alkaa palvella asiakkaitasi 24/7. Seuraat toimintaa hallintapaneelista.",
    },
  ];

  return (
    <section id="miten-toimii" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              Miten se toimii
            </h2>
            <p className="max-w-[900px] text-lg text-muted-foreground md:text-xl lg:text-2xl">
              Yksinkertainen prosessi käyttöönotosta käyttöön
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 py-12 lg:grid-cols-2">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative flex gap-4 rounded-2xl border border-foreground/10 bg-card p-6 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground text-lg font-bold shadow-lg group-hover:scale-110 transition-transform">
                {step.number}
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
