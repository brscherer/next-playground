
import { Suspense } from "react";
import LiveCounter from "./src/components/LiveCounter.client";
import PersonalGreeting from "./src/components/PersonalGreetings.server";
import StaticStats from "./src/components/StaticStats.server";
import NameInput from "./src/components/NameInput.client";


export default function Page() {
  return (
    <main className="bg-white rounded-lg shadow p-6">
      <h1 className="text-2xl font-semibold mb-4">Next.js Partial Rendering PoC (TypeScript)</h1>

      <StaticStats />

      <Suspense fallback={<div className="mt-4 p-4 bg-gray-100 rounded">Loading personalized content…</div>}>
        <PersonalGreeting />
      </Suspense>

      <div className="mt-6">
        <LiveCounter />
      </div>

      <div className="mt-6">
        <NameInput />
      </div>
    </main>
  );
}