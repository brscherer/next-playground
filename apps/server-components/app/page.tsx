import ServerMessage from "./server-message";
import ClientButton from "./client-button";
import MessageForm from "./MessageForm";

export default async function Page() {
  return (
    <div className="space-y-6">
      <ServerMessage />
      <ClientButton />
      <MessageForm />
    </div>
  );
}
