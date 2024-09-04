import {
  getDefaultTexts,
  solveBestTexts,
  SolveRequestPayload,
  SolveResponse,
} from "./api";

const mockPayload: SolveRequestPayload = {
  letter_counts: {
    A: 10,
    B: 14,
    C: 4,
    D: 4,
    E: 20,
    F: 20,
    G: 7,
    H: 9,
    I: 12,
    J: 18,
    K: 9,
    L: 11,
    M: 6,
    N: 8,
    O: 9,
    P: 14,
    Q: 12,
    R: 10,
    S: 8,
    T: 8,
    U: 12,
    V: 20,
    W: 8,
    X: 6,
    Y: 7,
    Z: 17,
  },
  // No custom texts
};

export default async function Home() {
  const texts = await getDefaultTexts();
  const solution: SolveResponse = await solveBestTexts(mockPayload);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <p>
          I requested the API for default texts used in the optimizing and got
          the following texts:
        </p>
        <br />
        <ul>
          {texts.map((text, index) => (
            <li key={index}>{text}</li>
          ))}
        </ul>
        <br />
        <p>
          The API also solved the best texts for mock letter counts and returned
          the following solution:
        </p>
        <br />
        <p>Minimized Letter Count: {solution.minimized_letter_count}</p>
        <br />
        <p>Best Texts:</p>
        <ul>
          {solution.best_texts.map((text, index) => (
            <li key={index}>{text}</li>
          ))}
        </ul>
        <br />
        <p>Leftover Letters:</p>
        <ul>
          {Object.entries(solution.leftover_letters).map(([letter, count]) => (
            <li key={letter}>
              {letter}: {count}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
