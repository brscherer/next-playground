import { Suspense } from "react";
import ServerMessage from "./server-message";
import ClientButton from "./client-button";
import MessageForm from "./MessageForm";
import SlowServer from "./slow-server";

export default async function Page() {
  return (
    <div className="space-y-6">
      <ServerMessage />
      <ClientButton />
      <MessageForm />
      <Suspense fallback={<p className="text-gray-500">Loading slow server component...</p>}>
        <SlowServer />
      </Suspense>
    </div>
  );
}
