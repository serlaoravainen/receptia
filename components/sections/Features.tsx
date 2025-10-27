"use client";

import { Clock, MessageCircle, Calendar, Phone, TrendingDown, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function Features() {
  const features = [
    {
      title: "24/7 Saatavuus",
      description: "Receptia ei koskaan lepää. Palvelee asiakkaitasi ympäri vuorokauden, joka päivä.",
      icon: Clock,
    },
    {
      title: "Luonnollinen Suomi",
      description: "Keskustelee asiakkaiden kanssa luonnollisella suomen kielellä.",
      icon: MessageCircle,
    },
    {
      title: "Ajanvaraus",
      description: "Varaa ja hallinnoi tapaamisia automaattisesti kalenterisi kanssa.",
      icon: Calendar,
    },
    {
      title: "Puhelinkeskus",
      description: "Vastaa puheluihin, ohjaa soittoja ja käsittelee asiakaspalvelupyyntöjä.",
      icon: Phone,
    },
    {
      title: "Kustannustehokas",
      description: "Säästä jopa 70% vastaanoton kuluissa verrattuna perinteiseen henkilöstöön.",
      icon: TrendingDown,
    },
    {
      title: "Nopea Käyttöönotto",
      description: "Ota käyttöön muutamassa päivässä ilman monimutkaista teknistä asennusta.",
      icon: Zap,
    },
  ];

  return (
    <section id="ominaisuudet" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ominaisuudet
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Kaikki mitä tarvitset moderniin vastaanottoon
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-xl border border-foreground/5 bg-card p-6 hover:border-foreground/10 hover:shadow-xl transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-foreground/5 group-hover:bg-foreground/10 transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
