// app/error.tsx
"use client";
export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <html><body style={{padding:24}}>
      <h1>Fehler 😬</h1>
      <pre>{error?.message}</pre>
      <button onClick={() => reset()}>Neu laden</button>
    </body></html>
  );
}