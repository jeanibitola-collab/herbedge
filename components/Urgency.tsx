import Image from "next/image";
import { Truck, Wallet, ShieldCheck } from "lucide-react";

const promises = [
  { icon: Truck, label: "Free delivery" },
  { icon: Wallet, label: "Pay on delivery" },
  { icon: ShieldCheck, label: "Money-back guarantee" },
];

export default function Urgency() {
  return (
    <section className="bg-stone-900 px-4 py-16 sm:py-24 text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl">
          <Image
            src="/images/gym.png"
            alt="Woman exercising with Vitamin D3 + K2 beside her"
            fill
            sizes="(min-width: 768px) 400px, 90vw"
            className="object-cover"
          />
        </div>

        <div>
          <span className="inline-block rounded-full bg-amber-400 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-stone-900">
            Limited stock available
          </span>
          <h2 className="mt-5 text-3xl sm:text-4xl font-semibold leading-tight font-[family-name:var(--font-heading)]">
            Give your body the daily support it deserves
          </h2>
          <p className="mt-4 text-lg text-stone-300">
            Demand is growing fast. Don't wait until discomfort or health worries stop you from
            enjoying life.
          </p>

          <ul className="mt-8 grid gap-4 sm:grid-cols-3">
            {promises.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-3 rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                <Icon size={22} className="shrink-0 text-emerald-400" />
                <span className="text-sm font-semibold">{label}</span>
              </li>
            ))}
          </ul>

          <a
            href="#pricing"
            className="mt-8 inline-block rounded-full bg-emerald-500 px-8 py-4 font-semibold text-white hover:bg-emerald-600"
          >
            Order yours today
          </a>
        </div>
      </div>
    </section>
  );
}