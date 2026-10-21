import { MessageCircle } from "lucide-react";
import { site } from "@/lib/product";

export default function WhatsAppButton() {
  const text = encodeURIComponent("Hello, I'd like to ask about Vitamin D3 + K2.");

  return (
    <a
      href={`https://wa.me/${site.whatsapp}?text=${text}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105"
    >
      <MessageCircle size={28} />
    </a>
  );
}