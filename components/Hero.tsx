import Image from "next/image";
import { Truck, ShieldCheck, Wallet } from "lucide-react";
import { product, formatNaira } from "@/lib/product";

export default function Hero() {
  const lowestPrice = Math.min(...product.packs.map((p) => p.price));

  return (
    <section className="px-4 pt-12 pb-16 sm:pt-20 sm:pb-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
            {product.name} supplement
          </p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-semibold leading-tight font-[family-name:var(--font-heading)]">
            Feel stronger and stay active, at any age
          </h1>
          <p className="mt-5 text-lg text-stone-600">
            {product.tagline}. One easy daily dose, delivered free to your door.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#pricing"
              className="rounded-full bg-emerald-600 px-7 py-3.5 text-center font-semibold text-white hover:bg-emerald-700"
            >
              Order now from {formatNaira(lowestPrice)}
            </a>
            <a
              href="#benefits"
              className="rounded-full px-7 py-3.5 text-center font-semibold text-stone-700 ring-1 ring-stone-300 hover:bg-white"
            >
              Learn more
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-stone-600">
            <li className="flex items-center gap-2">
              <Wallet size={16} className="text-emerald-600" /> Pay on delivery
            </li>
            <li className="flex items-center gap-2">
              <Truck size={16} className="text-emerald-600" /> Free delivery
            </li>
            <li className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-emerald-600" /> Money-back
              guarantee
            </li>
          </ul>
        </div>

        <div className="relative mx-auto aspect-[3/4] w-full max-w-xs sm:max-w-sm overflow-hidden rounded-3xl shadow-xl ring-1 ring-stone-200">
          <Image
            src="/images/hero.png"
            alt={`${product.name} bottle`}
            fill
            priority
            sizes="(min-width: 768px) 400px, 90vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
