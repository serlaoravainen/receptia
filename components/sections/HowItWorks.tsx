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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Miten se toimii
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Yksinkertainen prosessi käyttöönotosta käyttöön
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 py-12 lg:grid-cols-2">
          {steps.map((step, index) => (
            <div key={index} className="relative flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-lg font-bold">
                {step.number}
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
