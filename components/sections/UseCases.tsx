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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Käyttötapaukset
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Receptia palvelee monia eri toimialoja
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg border bg-card p-6 hover:shadow-lg transition-shadow"
            >
              <div className="space-y-2">
                <h3 className="text-xl font-bold">{useCase.industry}</h3>
                <p className="text-sm text-muted-foreground">
                  {useCase.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
