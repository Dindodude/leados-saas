import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { z } from "zod";

const requestSchema = z.object({
  name: z.string().min(1),
  niche: z.string().min(1),
  city: z.string().min(1),
  stage: z.enum(["first-message", "follow-up", "reactivation", "closing"]),
  notes: z.string().optional().default("")
});

export async function POST(request: NextRequest) {
  const payload = await request.json().catch(() => null);
  const parsed = requestSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "Invalid request body" }, { status: 400 });
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return NextResponse.json({
      ok: false,
      error: "OPENAI_API_KEY is not configured yet."
    }, { status: 503 });
  }

  const client = new OpenAI({ apiKey });
  const { name, niche, city, stage, notes } = parsed.data;

  const response = await client.responses.create({
    model: "gpt-5-mini",
    input: `Write a concise ${stage} outreach message for this lead.

Lead name: ${name}
Category: ${niche}
City: ${city}
Notes: ${notes || "None"}

Rules:
- Sound natural and direct
- Keep it under 90 words
- Do not use emojis
- Make it easy to send by WhatsApp`
  });

  return NextResponse.json({
    ok: true,
    text: response.output_text
  });
}
