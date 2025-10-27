"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Clock, Zap, Shield } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full py-20 md:py-32 lg:py-40 xl:py-52 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-background to-background" />
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, rgb(0 0 0 / 0.05) 1px, transparent 0)`,
        backgroundSize: '32px 32px'
      }} />

      {/* Decorative Blobs */}
      <div className="absolute top-20 -left-20 w-72 h-72 bg-foreground/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -right-20 w-96 h-96 bg-foreground/5 rounded-full blur-3xl" />

      <div className="container relative px-4 md:px-6">
        <div className="mx-auto max-w-7xl grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-12 items-center">
          {/* Main Content */}
          <div className="flex flex-col space-y-8 text-center lg:text-left lg:items-start items-center">
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
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-8 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:gap-3"
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

        {/* Demo Video Placeholder */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="hidden lg:block"
        >
          <div className="relative aspect-[9/16] max-w-[400px] rounded-3xl border-8 border-foreground/10 bg-gradient-to-br from-muted via-background to-muted overflow-hidden shadow-2xl">
            {/* Phone mockup frame */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 mb-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                  <svg className="h-8 w-8 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">Katso demopuhelu</h3>
              <p className="text-sm text-muted-foreground text-center">
                Näe miten Receptia vastaa asiakaspuheluihin ammattimaisesti
              </p>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-8 left-8 right-8 h-1 bg-foreground/5 rounded-full" />
            <div className="absolute bottom-8 left-8 right-8 flex gap-2 justify-center">
              <div className="h-1 w-8 bg-foreground/10 rounded-full" />
              <div className="h-1 w-8 bg-primary rounded-full" />
              <div className="h-1 w-8 bg-foreground/10 rounded-full" />
            </div>
          </div>
        </motion.div>
      </div>
      </div>
    </section>
  );
}
