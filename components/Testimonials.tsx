import { Star } from "lucide-react";

const reviews = [
  {
    name: "Chibuzor K.",
    detail: "45 · Delta",
    text: "My legs used to feel numb after sitting for long. After a few weeks of taking it daily, I move around much more comfortably and feel more active.",
  },
  {
    name: "Ibrahim A.",
    detail: "45 · Kano",
    text: "I had started avoiding stairs. Since adding this to my routine, I feel more confident moving around and I have more energy for my day.",
  },
  {
    name: "Rita O.",
    detail: "37 · Lagos",
    text: "My work keeps me sitting a lot and my legs were always stiff. I've noticed better comfort and mobility. I wish I had started earlier.",
  },
];

export default function Testimonials() {
  return (
    <section className="px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-emerald-700">
          Customer stories
        </p>
        <h2 className="mt-2 text-center text-3xl sm:text-4xl font-semibold font-[family-name:var(--font-heading)]">
          What our customers say
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <figure key={r.name} className="flex flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-stone-200">
              <div className="flex gap-1 text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 leading-relaxed text-stone-700">
                “{r.text}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 font-semibold text-emerald-800">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold">{r.name}</p>
                  <p className="text-sm text-stone-500">{r.detail}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}