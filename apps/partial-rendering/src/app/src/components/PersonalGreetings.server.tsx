import { cookies } from "next/headers";
import { JSX } from "react";


export default async function PersonalGreeting(): Promise<JSX.Element> {
  const cookiesResp = await cookies()
  const cookieName = cookiesResp.get("name")?.value;

  await new Promise((r) => setTimeout(r, 700));

  if (!cookieName) {
    return (
      <section className="mt-4 p-4 rounded border bg-yellow-50">
        <p className="text-sm">Hello, visitor — we don't have your name.</p>
        <p className="mt-2 text-xs">Try <a className="text-blue-600" href="/api/set-name?name=Bruno">setting a name</a>.</p>
      </section>
    );
  }


  return (
    <section className="mt-4 p-4 rounded border bg-green-50">
      <p className="text-sm">Welcome back, <strong>{cookieName}</strong>! (personalized)</p>
    </section>
  );
}