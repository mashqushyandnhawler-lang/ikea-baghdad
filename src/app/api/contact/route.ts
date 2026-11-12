import { NextResponse } from "next/server";
import { db } from "@/db";
import { contacts } from "@/db/schema";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;
    if (!name || !email || !message) return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    const [row] = await db.insert(contacts).values({ name, email, subject: subject || null, message }).returning();
    return NextResponse.json({ ok: true, id: row.id });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Failed to save message" }, { status: 500 });
  }
}
