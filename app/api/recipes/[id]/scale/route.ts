import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function POST(req: Request, { params }: any) {
  const id = params?.id as string;
  const { currentServings } = await req.json();

  await prisma.recipe.update({
    where: { id },
    data: { currentServings: Number(currentServings) || 1 },
  });

  return NextResponse.json({ ok: true });
}