const API_URL = "http://127.0.0.1:5000/api";

interface SolveRequestPayload {
  letter_counts: Record<string, number>;
  texts?: string[];
}

interface SolveResponse {
  minimized_letter_count: number;
  best_texts: string[];
  leftover_letters: Record<string, number>;
}

const getDefaultTexts = async (): Promise<string[]> => {
  const response = await fetch(`${API_URL}/texts`);
  if (!response.ok) {
    throw new Error(`Failed to fetch default texts: ${response.statusText}`);
  }
  const texts = await response.json();
  return texts;
};

const solveBestTexts = async (
  payload: SolveRequestPayload,
): Promise<SolveResponse> => {
  const response = await fetch(`${API_URL}/solve`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  if (!response.ok) {
    throw new Error(`Failed to solve best texts: ${response.statusText}`);
  }
  const responseData: SolveResponse = await response.json();
  return responseData;
};

export { getDefaultTexts, solveBestTexts };
