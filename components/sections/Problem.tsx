"use client";

import { motion } from "framer-motion";
import { X, Check, ArrowRight } from "lucide-react";

export default function Problem() {
  const problems = [
    "Menetetyt puhelut aukioloaikojen ulkopuolella",
    "Asiakkaat joutuvat odottamaan vastausta",
    "Korkeat henkilöstökulut",
    "Ruuhkahuiput ylikuormittavat vastaanoton",
  ];

  const solutions = [
    "Vastaa jokaiseen puheluun välittömästi",
    "Palvelee asiakkaita 24/7/365",
    "Kiinteä kuukausihinta ilman ylimääräisiä kuluja",
    "Käsittelee rajattoman määrän puheluita yhtä aikaa",
  ];

  return (
    <section id="ongelma" className="relative w-full py-16 md:py-24 lg:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          {/* Problem Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-destructive/10 px-3 py-1 text-sm font-medium text-destructive">
                Ongelma
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Perinteinen vastaanotto maksaa liikaa
              </h2>
            </div>
            <div className="space-y-3">
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 text-muted-foreground"
                >
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-destructive/10">
                    <X className="h-3 w-3 text-destructive" />
                  </div>
                  <p className="text-base md:text-lg">{problem}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Solution Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground/5 px-3 py-1 text-sm font-medium">
                Ratkaisu
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Receptia hoitaa kaiken automaattisesti
              </h2>
            </div>
            <div className="space-y-3">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-foreground">
                    <Check className="h-3 w-3 text-background" />
                  </div>
                  <p className="text-base font-medium md:text-lg">{solution}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA Arrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center"
        >
          <a
            href="#ominaisuudet"
            className="group flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all"
          >
            Katso ominaisuudet
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
