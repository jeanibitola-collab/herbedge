import Image from "next/image";
import { product, formatNaira } from "@/lib/product";

export default function PriceStory() {
  const lowestPrice = Math.min(...product.packs.map((p) => p.price));

  return (
    <section className="bg-white px-4 py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl shadow-xl">
          <Image
            src="/images/grandma.png"
            alt="Grandmother smiling as her grandchild takes first steps"
            fill
            sizes="(min-width: 768px) 450px, 90vw"
            className="object-cover"
          />
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
            How much does it cost?
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold leading-tight font-[family-name:var(--font-heading)]">
            Be there for every moment that matters
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-stone-600">
            Think about how much strong bones and easy movement mean to your daily life, and how
            costly bone and joint problems can become.
          </p>
          <p className="mt-4 text-lg text-stone-600">
            You might expect a quality supplement like this to cost ₦60,000 or more.
          </p>

          <div className="mt-6 space-y-2 text-lg">
            <p>
              You won't pay <span className="text-stone-400 line-through">₦60,000</span>.
            </p>
            <p>
              You won't even pay <span className="text-stone-400 line-through">₦40,000</span>.
            </p>
          </div>

          <div className="mt-6 rounded-2xl bg-emerald-50 p-6 ring-1 ring-emerald-200">
            <p className="text-stone-600">Today you can start from just</p>
            <p className="mt-1 text-4xl font-bold text-emerald-700">{formatNaira(lowestPrice)}</p>
          </div>

          <a
            href="#pricing"
            className="mt-6 inline-block rounded-full bg-emerald-600 px-8 py-4 font-semibold text-white hover:bg-emerald-700"
          >
            See the packs
          </a>
        </div>
      </div>
    </section>
  );
}