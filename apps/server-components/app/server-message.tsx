export default function ServerMessage() {
  const timestamp = new Date().toISOString();
  return (
    <p style={{ color: "green" }}>
      This is a <strong>Server Component</strong>. Rendered at {timestamp}.
    </p>
  );
}
