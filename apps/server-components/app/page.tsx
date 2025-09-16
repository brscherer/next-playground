import ServerMessage from "./server-message";
import ClientButton from "./client-button";

export default async function Page() {
  return (
    <div>
      <ServerMessage />
      <ClientButton />
    </div>
  );
}
