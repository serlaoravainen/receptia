"use client";

import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Miten Receptia eroaa tavallisesta vastaajasta?",
      answer:
        "Receptia ei ole pelkkä viestinvälityspalvelu. Se keskustelee asiakkaiden kanssa älykkäästi, varaa aikoja, vastaa kysymyksiin ja ohjaa puheluita tarvittaessa oikealle henkilölle.",
    },
    {
      question: "Toimiiko Receptia todella suomen kielellä?",
      answer:
        "Kyllä! Receptia on koulutettu ymmärtämään ja puhumaan luonnollista suomen kieltä. Se ymmärtää murteita ja erilaisia puhetapoja.",
    },
    {
      question: "Kuinka nopeasti Receptian voi ottaa käyttöön?",
      answer:
        "Tyypillinen käyttöönotto kestää 3-7 päivää riippuen räätälöinnin laajuudesta ja integraatioiden määrästä.",
    },
    {
      question: "Mitä tapahtuu, jos Receptia ei osaa vastata kysymykseen?",
      answer:
        "Receptia voi ohjata puhelun henkilökunnallesi tai ottaa yhteystiedot ja varmistaa, että asiakas saa vastauksen myöhemmin.",
    },
    {
      question: "Voiko Receptia integroitua nykyisiin järjestelmiimme?",
      answer:
        "Kyllä, Receptia voidaan integroida useimpiin ajanvaraus-, CRM- ja puhelinjärjestelmiin.",
    },
    {
      question: "Paljonko Receptia maksaa?",
      answer:
        "Hinnoittelu räätälöidään yrityksesi tarpeiden mukaan. Ota yhteyttä, niin kerromme lisää.",
    },
  ];

  return (
    <section id="ukk" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Usein Kysytyt Kysymykset
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Vastauksia yleisimpiin kysymyksiin
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl space-y-4 py-12">
          {faqs.map((faq, index) => (
            <div key={index} className="rounded-lg border bg-card">
              <button
                className="flex w-full items-center justify-between p-6 text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-semibold">{faq.question}</span>
                <svg
                  className={`h-5 w-5 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
