import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function POST(req: Request) {
  const body = await req.json();
  const r = await prisma.recipe.create({
    data: {
      userId: 'demo',
      title: body.title,
      baseServings: body.baseServings || 2,
      currentServings: body.baseServings || 2,
      instructionsMd: body.instructionsMd || '',
      ingredients: {
        create: (body.ingredients || []).map((x: any) => ({
          name: x.name,
          unit: x.unit,
          amountBase: x.amountBase,
          gramsBase: x.gramsBase,
        })),
      },
    },
  });
  return NextResponse.json({ id: r.id }, { status: 201 });
}