export default async function DogImage() {
  const res = await fetch("https://dog.ceo/api/breeds/image/random", {
    cache: "no-store"
  });
  const data = await res.json();

  return (
    <div className="mt-4">
      <p className="font-medium">Random Dog from API:</p>
      <img
        src={data.message}
        alt="A random dog"
        className="rounded shadow mt-2 max-h-64"
      />
    </div>
  );
}
