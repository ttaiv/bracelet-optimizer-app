const API_URL = "http://127.0.0.1:5000/api";

export default async function Home() {

  const response = await fetch(`${API_URL}/texts`)
  const texts: string[] = await response.json()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <p>I requested the API for default texts used in the optimizing and got the following texts:</p>
        <br />
        <ul>
          {texts.map((text, index) => (
            <li key={index}>{text}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}
