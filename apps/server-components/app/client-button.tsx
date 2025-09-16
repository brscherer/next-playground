"use client";

import { useState } from "react";

export default function ClientButton() {
  const [count, setCount] = useState(0);
  return (
    <button
      style={{ marginTop: "1rem", padding: "0.5rem 1rem" }}
      onClick={() => setCount((c) => c + 1)}
    >
      Client Component Button: {count}
    </button>
  );
}
