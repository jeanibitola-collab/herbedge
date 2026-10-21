import Image from "next/image";
import { product, formatNaira } from "@/lib/product";

export default function Pricing() {
  return (
    <section id="pricing" className="px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-emerald-700">
          Choose your pack
        </p>
        <h2 className="mt-2 text-center text-3xl sm:text-4xl font-semibold font-[family-name:var(--font-heading)]">
          Simple pricing, free delivery
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {product.packs.map((pack) => {
            const saving = pack.oldPrice - pack.price;
            const featured = pack.id === "standard";

            return (
              <div
                key={pack.id}
                className={`relative flex flex-col rounded-2xl bg-white p-6 text-stone-900 shadow-sm ring-1 ${
                  featured ? "ring-2 ring-emerald-600 md:-translate-y-2" : "ring-stone-200"
                }`}
              >
                {pack.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold text-white">
                    {pack.badge}
                  </span>
                )}

                <h3 className="text-lg font-semibold">{pack.title}</h3>
                <p className="text-sm text-stone-500">
                  {pack.bottles} {pack.bottles === 1 ? "bottle" : "bottles"} · {pack.days}-day supply
                </p>

                <div className="relative mx-auto my-6 aspect-square w-40">
                  <Image
                    src={pack.image}
                    alt={`${pack.bottles} bottle ${product.name} pack`}
                    fill
                    className="object-contain"
                    sizes="160px"
                  />
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold">{formatNaira(pack.price)}</span>
                  <span className="text-sm text-stone-400 line-through">
                    {formatNaira(pack.oldPrice)}
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium text-emerald-700">
                  You save {formatNaira(saving)}
                </p>

                <ul className="mt-5 space-y-2 text-sm text-stone-600">
                  <li>✓ Pay on delivery</li>
                  <li>✓ Free delivery nationwide</li>
                  <li>✓ Money-back guarantee</li>
                </ul>

                <a
                  href={`#order-${pack.id}`}
                  className={`mt-6 rounded-full px-5 py-3 text-center font-semibold transition ${
                    featured
                      ? "bg-emerald-600 text-white hover:bg-emerald-700"
                      : "bg-stone-100 text-stone-800 hover:bg-stone-200"
                  }`}
                >
                  Order this pack
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}