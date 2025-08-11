'use client';
import { useEffect, useState } from 'react';

type ApiHealth = { ok: boolean; ts?: string };

export default function Home() {
  const [health, setHealth] = useState<ApiHealth | null>(null);

  useEffect(() => {
    const base = process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:3001';
    fetch(`${base}/api/health`)
      .then((r) => r.json())
      .then((data: ApiHealth) => setHealth(data))
      .catch(() => setHealth({ ok: false }));
  }, []);

  return (
    <main className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-semibold">Recipe Agent</h1>
      <p className="mt-2 text-gray-600">
        Hello World — API Health: {health?.ok ? 'OK' : '…'}
      </p>
    </main>
  );
}