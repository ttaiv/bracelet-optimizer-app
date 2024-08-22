const API_URL = "http://127.0.0.1:5000/api";

const getDefaultTexts = async (): Promise<string[]> => {
  const response = await fetch(`${API_URL}/texts`);
  if (!response.ok) {
    throw new Error(`Failed to fetch default texts: ${response.statusText}`);
  }
  const texts = response.json();
  return texts;
};

export { getDefaultTexts };