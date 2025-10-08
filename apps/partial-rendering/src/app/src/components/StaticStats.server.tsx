import { JSX } from "react";

export default function StaticStats(): JSX.Element {
  const stats = {
    visits: 12345,
    posts: 32,
    contributors: 4,
  };


  return (
    <section className="p-4 rounded border">
      <h2 className="font-medium mb-2">Static stats (pre-rendered)</h2>
      <ul className="text-sm text-gray-700 space-y-1">
        <li>Visits: <strong>{stats.visits}</strong></li>
        <li>Posts: <strong>{stats.posts}</strong></li>
        <li>Contributors: <strong>{stats.contributors}</strong></li>
      </ul>
    </section>
  );
}