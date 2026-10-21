"use client";

import { useEffect, useState } from "react";
import { product, site, formatNaira } from "@/lib/product";

const states = [
  "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno",
  "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "FCT Abuja", "Gombe",
  "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos",
  "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", "Sokoto",
  "Taraba", "Yobe", "Zamfara",
];

const inputClass =
  "mt-1 w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-stone-900 outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100";

export default function OrderForm() {
  const [packId, setPackId] = useState(product.packs[1].id);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    whatsapp: "",
    address: "",
    state: "",
  });
  const [error, setError] = useState("");

  const selected = product.packs.find((p) => p.id === packId)!;

  // When someone clicks "Order this pack", select that pack and scroll here
  useEffect(() => {
    function applyHash() {
      const hash = window.location.hash;
      if (hash.startsWith("#order-")) {
        const id = hash.replace("#order-", "");
        if (product.packs.some((p) => p.id === id)) setPackId(id);
        document.getElementById("order")?.scrollIntoView({ behavior: "smooth" });
      }
    }
    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, []);

  function update(field: keyof typeof form, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!form.name || !form.phone || !form.address || !form.state) {
      setError("Please fill in your name, phone number, address and state.");
      return;
    }
    if (!/^0\d{10}$/.test(form.phone.replace(/\s/g, ""))) {
      setError("Enter a valid 11-digit phone number, e.g. 08012345678.");
      return;
    }
    setError("");

    const message = [
      `*New order: ${product.name}*`,
      `Pack: ${selected.title} (${selected.bottles} bottle${selected.bottles > 1 ? "s" : ""}) – ${formatNaira(selected.price)}`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `WhatsApp: ${form.whatsapp || form.phone}`,
      `Address: ${form.address}`,
      `State: ${form.state}`,
    ].join("\n");

    window.open(
      `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  }

  return (
    <section id="order" className="scroll-mt-20 bg-emerald-50 px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-center text-3xl sm:text-4xl font-semibold font-[family-name:var(--font-heading)]">
          Place your order
        </h2>
        <p className="mt-3 text-center text-stone-600">
          Fill in your details. You pay only when your order arrives.
        </p>

        <form onSubmit={handleSubmit} className="mt-10 space-y-6 rounded-2xl bg-white p-6 sm:p-8 shadow-sm ring-1 ring-stone-200">
          <fieldset>
            <legend className="text-sm font-semibold text-stone-700">Choose your pack</legend>
            <div className="mt-2 grid gap-3 sm:grid-cols-3">
              {product.packs.map((pack) => (
                <button
                  type="button"
                  key={pack.id}
                  onClick={() => setPackId(pack.id)}
                  className={`rounded-xl border-2 p-4 text-left transition ${
                    packId === pack.id
                      ? "border-emerald-600 bg-emerald-50"
                      : "border-stone-200 hover:border-stone-300"
                  }`}
                >
                  <p className="font-semibold">{pack.title}</p>
                  <p className="text-sm text-stone-500">
                    {pack.bottles} bottle{pack.bottles > 1 ? "s" : ""}
                  </p>
                  <p className="mt-1 font-bold text-emerald-700">{formatNaira(pack.price)}</p>
                </button>
              ))}
            </div>
          </fieldset>

          <label className="block text-sm font-semibold text-stone-700">
            Full name
            <input className={inputClass} value={form.name} onChange={(e) => update("name", e.target.value)} />
          </label>

          <div className="grid gap-6 sm:grid-cols-2">
            <label className="block text-sm font-semibold text-stone-700">
              Phone number
              <input className={inputClass} type="tel" placeholder="08012345678" value={form.phone} onChange={(e) => update("phone", e.target.value)} />
            </label>
            <label className="block text-sm font-semibold text-stone-700">
              WhatsApp number <span className="font-normal text-stone-400">(if different)</span>
              <input className={inputClass} type="tel" value={form.whatsapp} onChange={(e) => update("whatsapp", e.target.value)} />
            </label>
          </div>

          <label className="block text-sm font-semibold text-stone-700">
            Delivery address <span className="font-normal text-stone-400">(home or office)</span>
            <textarea className={inputClass} rows={3} value={form.address} onChange={(e) => update("address", e.target.value)} />
          </label>

          <label className="block text-sm font-semibold text-stone-700">
            State
            <select className={inputClass} value={form.state} onChange={(e) => update("state", e.target.value)}>
              <option value="">Select your state</option>
              {states.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </label>

          {error && <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>}

          <div className="flex items-center justify-between border-t border-stone-200 pt-6">
            <span className="text-stone-600">Total</span>
            <span className="text-2xl font-bold">{formatNaira(selected.price)}</span>
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-emerald-600 py-4 text-lg font-semibold text-white hover:bg-emerald-700"
          >
            Send my order on WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}