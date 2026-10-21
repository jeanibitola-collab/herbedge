import { Phone } from "lucide-react";
import { site } from "@/lib/product";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-stone-50/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <span className="text-xl font-semibold font-[family-name:var(--font-heading)] text-emerald-800">
          {site.name}
        </span>
        <a
          href={`tel:${site.phone}`}
          className="flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
        >
          <Phone size={16} />
          <span className="hidden sm:inline">{site.phone}</span>
          <span className="sm:hidden">Call us</span>
        </a>
      </div>
    </header>
  );
}