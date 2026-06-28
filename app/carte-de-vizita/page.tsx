import Link from "next/link";
import Image from "next/image";

const downloadItems = [
  {
    label: "Față (PDF print-ready)",
    href: "/business-card/prime-electric-business-card-front.pdf",
  },
  {
    label: "Verso (PDF print-ready)",
    href: "/business-card/prime-electric-business-card-back.pdf",
  },
  {
    label: "Față (SVG editabil)",
    href: "/business-card/prime-electric-business-card-front.svg",
  },
  {
    label: "Verso (SVG editabil)",
    href: "/business-card/prime-electric-business-card-back.svg",
  },
  {
    label: "Siglă ANRE (SVG)",
    href: "/business-card/anre-logo.svg",
  },
];

export default function BusinessCardPage() {
  return (
    <main className="min-h-screen bg-prime-bg-main px-6 py-14 text-prime-text-main lg:px-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-prime-text-mut">[ Kit tipar ]</p>
            <h1 className="mt-4 text-4xl font-light tracking-tight md:text-6xl">
              Carte de vizită <span className="font-latienne italic">Prime Electric</span>
            </h1>
            <p className="mt-5 max-w-3xl text-sm text-prime-text-mut md:text-base">
              Format profesional pentru tipar: 85 × 55 mm, pregătit cu bleed de 3 mm (fișiere de lucru 91 × 61 mm) și zonă de
              siguranță internă.
            </p>
          </div>
          <Link
            href="/"
            className="rounded-full border border-prime-border px-5 py-3 text-xs uppercase tracking-[0.18em] transition-colors hover:bg-prime-text-main hover:text-prime-bg-main"
          >
            Înapoi pe site
          </Link>
        </div>

        <section className="grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-prime-border bg-prime-bg-sec p-4 shadow-[0_30px_70px_rgba(0,0,0,0.12)]">
            <h2 className="mb-3 text-sm uppercase tracking-[0.2em] text-prime-text-mut">Față</h2>
            <Image
              src="/business-card/prime-electric-business-card-front.svg"
              alt="Carte de vizită Prime Electric - față"
              className="w-full rounded-lg border border-prime-border"
              width={910}
              height={610}
            />
          </article>
          <article className="rounded-2xl border border-prime-border bg-prime-bg-sec p-4 shadow-[0_30px_70px_rgba(0,0,0,0.12)]">
            <h2 className="mb-3 text-sm uppercase tracking-[0.2em] text-prime-text-mut">Verso</h2>
            <Image
              src="/business-card/prime-electric-business-card-back.svg"
              alt="Carte de vizită Prime Electric - verso"
              className="w-full rounded-lg border border-prime-border"
              width={910}
              height={610}
            />
          </article>
        </section>

        <section className="rounded-2xl border border-prime-border bg-prime-bg-sec p-6">
          <h2 className="text-sm uppercase tracking-[0.22em] text-prime-text-mut">Descărcare fișiere</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {downloadItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                download
                className="rounded-xl border border-prime-border px-4 py-3 text-sm transition-colors hover:bg-prime-text-main hover:text-prime-bg-main"
              >
                {item.label}
              </a>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
