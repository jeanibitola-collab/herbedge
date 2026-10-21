import { XCircle } from "lucide-react";

const symptoms = [
  "Knee pain or weak joints",
  "Back pain after standing or walking for long",
  "Worry about your bones getting weaker with age",
  "Constant tiredness and low energy",
  "Concern about keeping your heart healthy",
];

export default function Problem() {
  return (
    <section className="px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-block rounded-full border border-stone-300 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-stone-600">
          Feel stronger · Move better · Live healthier
        </span>

        <h2 className="mt-6 text-3xl sm:text-4xl font-semibold leading-tight font-[family-name:var(--font-heading)]">
          Are <span className="text-red-600">weak bones, body pain or health worries</span> slowing
          you down?
        </h2>

        <div className="mt-8 rounded-2xl bg-amber-100 px-6 py-5">
          <p className="text-xl sm:text-2xl font-semibold text-amber-900 font-[family-name:var(--font-heading)]">
            The problem may not be your age…
          </p>
        </div>

        <p className="mt-6 text-lg leading-relaxed text-stone-600">
          That constant weakness, leg pain or tiredness may not just be stress.{" "}
          <span className="font-semibold text-stone-800">
            Low vitamin D and poor calcium use could be part of the picture.
          </span>
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-xl rounded-2xl bg-white p-6 sm:p-8 shadow-sm ring-1 ring-stone-200">
        <h3 className="text-lg font-semibold">Do you sometimes experience:</h3>
        <ul className="mt-4 space-y-3">
          {symptoms.map((s) => (
            <li key={s} className="flex items-start gap-3 text-stone-700">
              <XCircle size={20} className="mt-0.5 shrink-0 text-red-500" />
              {s}
            </li>
          ))}
        </ul>
        <p className="mt-6 font-semibold text-emerald-700">
          If yes, keep reading. This could be what your body has been missing.
        </p>
      </div>
    </section>
  );
}