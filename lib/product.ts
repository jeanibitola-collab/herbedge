export const site = {
  name: "HerbEdge",
  phone: "09023467984",
  whatsapp: "2349023467984", // international format, no +
};

export type Pack = {
  id: string;
  title: string;
  bottles: number;
  days: number;
  price: number;
  oldPrice: number;
  image: string;
  badge?: string;
};

export const product = {
  name: "Vitamin D3 + K2",
  tagline: "Daily support for strong bones, calcium absorption and heart health",
  packs: [
    {
      id: "starter",
      title: "Starter Pack",
      bottles: 1,
      days: 30, // ← set to the TRUE supply per bottle
      price: 23000,
      oldPrice: 28000,
      image: "/images/pack-1.png",
    },
    {
      id: "standard",
      title: "Value Pack",
      bottles: 2,
      days: 60,
      price: 32000,
      oldPrice: 38000,
      image: "/images/pack-2.png",
      badge: "Popular",
    },
    {
      id: "family",
      title: "Best Value Pack",
      bottles: 3,
      days: 90,
      price: 45000,
      oldPrice: 54000,
      image: "/images/pack-3.png",
      badge: "Best value",
    },
  ] satisfies Pack[],
};

export function formatNaira(amount: number) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(amount);
}