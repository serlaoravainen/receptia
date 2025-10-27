import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t bg-background">
      <div className="container px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Receptia</h3>
            <p className="text-sm text-muted-foreground">
              Tekoälyvastaanotto joka palvelee yrityksesi asiakkaita 24/7.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Pikalinkit</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#ominaisuudet"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Ominaisuudet
                </Link>
              </li>
              <li>
                <Link
                  href="#miten-toimii"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Miten toimii
                </Link>
              </li>
              <li>
                <Link
                  href="#kayttotapaukset"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Käyttötapaukset
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Tuki</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#ukk"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  UKK
                </Link>
              </li>
              <li>
                <Link
                  href="#yhteystiedot"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Yhteystiedot
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Yhteystiedot</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>info@receptia.fi</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Receptia. Kaikki oikeudet pidätetään.</p>
        </div>
      </div>
    </footer>
  );
}
