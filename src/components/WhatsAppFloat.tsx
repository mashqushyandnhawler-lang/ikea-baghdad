"use client";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/data";

export default function WhatsAppFloat() {
  return (
    <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello IKEA Baghdad, I need help with furniture")}`} target="_blank" rel="noreferrer" aria-label="WhatsApp support"
      className="fixed bottom-5 end-5 z-50 bg-[#25D366] text-white w-14 h-14 rounded-full grid place-items-center shadow-2xl hover:scale-105 transition">
      <MessageCircle size={28} />
      <span className="absolute -top-1 -end-1 w-4 h-4 bg-red-600 rounded-full border-2 border-white" />
    </a>
  );
}
