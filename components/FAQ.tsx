import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How do I take it?",
    a: "Take [X] softgel(s) daily with a meal, or as directed on the label. Do not exceed the recommended dose.",
  },
  {
    q: "How long before I notice a difference?",
    a: "Everyone's body is different. Most people take it consistently for several weeks as part of a healthy routine.",
  },
  {
    q: "Is it safe?",
    a: "It is generally well tolerated by healthy adults when taken as directed. If you are pregnant, breastfeeding, on blood thinners or other medication, speak to your doctor first.",
  },
  {
    q: "Can men and women use it?",
    a: "Yes. It is suitable for adult men and women.",
  },
  {
    q: "How does payment and delivery work?",
    a: "Delivery is free nationwide. You pay when your order arrives at your home or office. We'll call or WhatsApp you to confirm before dispatch.",
  },
];

export default function FAQ() {
  return (
    <section className="px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center text-3xl sm:text-4xl font-semibold font-[family-name:var(--font-heading)]">
          Frequently asked questions
        </h2>

        <div className="mt-10 divide-y divide-stone-200 rounded-2xl bg-white ring-1 ring-stone-200">
          {faqs.map((item) => (
            <details key={item.q} className="group p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                {item.q}
                <ChevronDown
                  size={20}
                  className="shrink-0 text-stone-400 transition group-open:rotate-180"
                />
              </summary>
              <p className="mt-3 leading-relaxed text-stone-600">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}