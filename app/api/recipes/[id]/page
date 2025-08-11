'use client';
import { useEffect, useState } from 'react';

export default function Page({ params }: { params: { id: string } }){
  const [r,setR]=useState<any>(null);
  useEffect(()=>{ fetch(`/api/recipes/${params.id}`).then(r=>r.json()).then(setR); },[params.id]);
  async function setServ(v:number){ await fetch(`/api/recipes/${params.id}/scale`, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ currentServings:v }) }); const n = await fetch(`/api/recipes/${params.id}`).then(r=>r.json()); setR(n); }
  if(!r) return <main className="p-6">Laden…</main>;
  return (
    <main className="p-6 max-w-3xl mx-auto space-y-4">
      <h1 className="text-3xl font-semibold">{r.title}</h1>
      <div className="flex items-center gap-2">
        <label>Portionen</label>
        <input type="number" min={1} value={r.currentServings} onChange={e=>setServ(parseInt(e.target.value||'1'))} className="border px-2 py-1 w-24" />
      </div>
      <table className="w-full text-sm">
        <thead><tr><th className="text-left">Zutat</th><th>g (Basis)</th><th>g (skaliert)</th></tr></thead>
        <tbody>{r.ingredients.map((i:any)=>(<tr key={i.id}><td>{i.name}</td><td className="text-right">{i.gramsBase}</td><td className="text-right">{Math.round(i.gramsScaled)}</td></tr>))}</tbody>
      </table>
    </main>
  );
}