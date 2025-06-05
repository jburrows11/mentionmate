export async function triggerN8n(post) {
  try {
    await fetch(import.meta.env.VITE_N8N_WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    });
  } catch (err) {
    console.error("n8n trigger failed:", err);
  }
}