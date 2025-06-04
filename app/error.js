'use client';

export default function Error({ error, reset }) {
  return (
    <div style={{ padding: 32 }}>
      <h2>Что-то пошло не так!</h2>
      <pre>{error?.message}</pre>
      <button onClick={() => reset()}>Попробовать снова</button>
    </div>
  );
} 