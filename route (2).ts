import { NextResponse } from "next/server";
import { db } from "@/db";
import { orders } from "@/db/schema";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { customerName, phone, address, governorate, items, total } = body;
    if (!customerName || !phone || !address || !governorate || !items || total == null) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }
    const [row] = await db.insert(orders).values({ customerName, phone, address, governorate, items, total }).returning();
    return NextResponse.json({ ok: true, id: row.id });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Failed to save order" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const rows = await db.select().from(orders).orderBy(orders.id);
    return NextResponse.json(rows);
  } catch {
    return NextResponse.json([]);
  }
}
