'use client';
import { useState } from 'react';

export default function Home(){
  const [text,setText]=useState('Pfannkuchen\n2 EL Zucker\n300 ml Milch\nZubereitung\nAlles mischen');
  const [draft,setDraft]=useState<any>(null);
  const [recipeId,setRecipeId]=useState<string>('');

  async function importText(){
    const r = await fetch('/api/import/text',{ method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ text }) });
    setDraft(await r.json());
  }
  async function save(){
    const r = await fetch('/api/recipes',{ method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(draft) });
    const j = await r.json(); setRecipeId(j.id);
  }

  return (
    <main className="p-6 max-w-3xl mx-auto space-y-4">
      <h1 className="text-2xl font-semibold">Recipe Agent</h1>
      <section className="space-y-2">
        <textarea className="border w-full h-40 p-2" value={text} onChange={e=>setText(e.target.value)} />
        <div className="flex gap-2">
          <button className="border px-3 py-2" onClick={importText}>Importieren</button>
          {draft && <button className="border px-3 py-2" onClick={save}>Speichern</button>}
          {recipeId && <a className="border px-3 py-2" href={`/recipes/${recipeId}`}>Zum Rezept</a>}
        </div>
      </section>
      {draft && (
        <section>
          <h2 className="text-xl font-medium">Vorschau</h2>
          <pre className="bg-gray-50 p-3 overflow-auto text-sm">{JSON.stringify(draft,null,2)}</pre>
        </section>
      )}
    </main>
  );
}