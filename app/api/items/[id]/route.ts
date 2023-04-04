import { NextRequest, NextResponse } from "next/server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function DELETE(req: NextRequest, res: NextResponse) {
  const id: string = req.nextUrl.pathname.split("/api/items/")[1];

  // @ts-ignore
  const deleteUser = await prisma.item.delete({
    where: {
      id,
    },
  });

  return NextResponse.json({ success: true });
}
