"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full py-20 md:py-32 lg:py-40 xl:py-52 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-background to-background" />

      <div className="container relative px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border bg-background px-4 py-1.5 text-sm"
          >
            <Sparkles className="h-4 w-4" />
            <span className="font-medium">Tekoälyvastaanotto yrityksellesi</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text">
              Vastaanotto joka ei
              <br />
              <span className="text-foreground">koskaan nuku</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl">
              Palvele asiakkaitasi 24/7. Receptia vastaa puheluihin, varaa aikoja
              ja käsittelee asiakkaiden kysymykset ympäri vuorokauden.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-3 sm:flex-row sm:gap-4"
          >
            <Link
              href="#yhteystiedot"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-foreground px-8 text-sm font-semibold text-background transition-all hover:bg-foreground/90 hover:gap-3"
            >
              Aloita tästä
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="#miten-toimii"
              className="inline-flex h-12 items-center justify-center rounded-lg border-2 border-foreground/10 bg-background px-8 text-sm font-semibold transition-all hover:border-foreground/20 hover:bg-muted"
            >
              Lue lisää
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="pt-8 text-sm text-muted-foreground"
          >
            <p>Käyttöönotto alle viikossa • Ei sitoutumisaikaa • Suomalainen asiakaspalvelu</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
