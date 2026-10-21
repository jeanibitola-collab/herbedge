import { Bone, HeartPulse, Droplets, Footprints } from "lucide-react";

const benefits = [
  {
    icon: Bone,
    title: "Supports bone health",
    text: "Helps maintain strong, healthy bones so you can stay active every day.",
  },
  {
    icon: Droplets,
    title: "Calcium absorption",
    text: "Vitamin D3 and K2 work together to help your body use calcium properly.",
  },
  {
    icon: HeartPulse,
    title: "Heart wellness",
    text: "Supports normal cardiovascular function as part of a healthy lifestyle.",
  },
  {
    icon: Footprints,
    title: "Stay independent",
    text: "Move with more confidence and keep up with the people you love.",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="bg-white px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-emerald-700">
          Why it works
        </p>
        <h2 className="mt-2 text-center text-3xl sm:text-4xl font-semibold font-[family-name:var(--font-heading)]">
          Two vitamins that work better together
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl bg-stone-50 p-6 ring-1 ring-stone-200">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                <Icon size={24} />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}