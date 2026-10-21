import { site } from "@/lib/product";

export default function Footer() {
  return (
    <footer className="bg-stone-900 px-4 py-12 text-stone-400">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-xl font-semibold text-white font-[family-name:var(--font-heading)]">
            {site.name}
          </span>
          <a href={`tel:${site.phone}`} className="hover:text-white">
            Call or WhatsApp: {site.phone}
          </a>
        </div>

        <p className="mt-8 border-t border-stone-800 pt-8 text-xs leading-relaxed">
          This product is a dietary supplement and is not intended to diagnose, treat, cure or
          prevent any disease. Results vary from person to person. Consult your doctor before
          use if you have a medical condition or take medication.
        </p>
        <p className="mt-4 text-xs">
          © 2026 {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}