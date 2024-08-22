import { getDefaultTexts } from "./api";

export default async function Home() {

  const texts = await getDefaultTexts();

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
