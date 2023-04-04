import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest, res: NextResponse) {
  const body = await req.json();

  const item = await prisma.item.create({
    data: {
      text: body.text,
    },
  });

  return NextResponse.json({ success: true, item });
}
