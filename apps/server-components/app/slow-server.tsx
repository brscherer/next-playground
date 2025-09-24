async function getData() {
  await new Promise((res) => setTimeout(res, 3000));
  return "This data was streamed after 3 seconds.";
}

export default async function SlowServer() {
  const data = await getData();
  return <p className="text-purple-700">{data}</p>;
}
