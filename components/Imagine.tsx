import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const wins = [
  "Walking comfortably",
  "Feeling confident in your movement",
  "Staying active with your family",
  "Feeling stronger from within",
];

export default function Imagine() {
  return (
    <section className="px-4 py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
        <div className="relative aspect-[6/5] overflow-hidden rounded-3xl shadow-xl md:order-2">
          <Image
            src="/images/family.png"
            alt="Smiling family holding a bottle of Vitamin D3 + K2"
            fill
            sizes="(min-width: 768px) 560px, 100vw"
            className="object-cover"
          />
        </div>

        <div>
          <h2 className="text-3xl sm:text-4xl font-semibold leading-tight font-[family-name:var(--font-heading)]">
            Imagine feeling like this again…
          </h2>
          <ul className="mt-8 space-y-4">
            {wins.map((w) => (
              <li key={w} className="flex items-center gap-3 text-lg text-stone-700">
                <CheckCircle2 size={24} className="shrink-0 text-emerald-600" />
                {w}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}