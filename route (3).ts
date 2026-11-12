import { NextResponse } from "next/server";
import { PRODUCTS } from "@/lib/data";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get("category");
  const q = (searchParams.get("q") || "").toLowerCase();
  let list = PRODUCTS;
  if (category) list = list.filter((p) => p.category === category);
  if (q) list = list.filter((p) => p.nameEn.toLowerCase().includes(q) || p.descEn.toLowerCase().includes(q));
  return NextResponse.json(list);
}
