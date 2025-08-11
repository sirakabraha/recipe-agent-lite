import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function POST(req: Request, { params }: { params: { id: string } }){
  const { currentServings } = await req.json();
  await prisma.recipe.update({ where:{ id: params.id }, data:{ currentServings } });
  return NextResponse.json({ ok:true });
}