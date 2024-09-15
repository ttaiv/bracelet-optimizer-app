"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { solveBestTexts, SolveRequestPayload, SolveResponse } from "./api";

// Create an array of alphabet letters
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const LetterForm = () => {
  // Define the initial form values with letter to be 0
  const initialFormValues: Record<string, number> = letters.reduce(
    (acc, letter) => {
      acc[letter] = 0;
      return acc;
    },
    {} as Record<string, number>,
  );

  // State to store current letter counts in the form
  const [formValues, setFormValues] =
    useState<Record<string, number>>(initialFormValues);

  // State to store the result from the API call to the bracelet optimizer
  const [result, setResult] = useState<SolveResponse | null>(null);

  // Handler function for letter form input field changes
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: parseInt(value, 10) || 0,
    }));
  };

  // Handler function for form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response: SolveResponse = await solveBestTexts({
        letter_counts: formValues,
      });
      setResult(response);
    } catch (error) {
      console.error("Error solving best texts:", error);
    }
  };

  return (
    <div>
      {/* Display the letter form for inputting letter counts */}
      <form
        onSubmit={handleSubmit}
        className="space-y-4 p-6 max-w-md mx-auto bg-white shadow-lg rounded-lg"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">
          Input letter counts
        </h2>
        {letters.map((letter) => (
          <div key={letter} className="flex items-center space-x-2">
            <label
              htmlFor={letter}
              className="w-12 text-lg font-medium text-gray-700"
            >
              {letter}:
            </label>
            <input
              type="number"
              id={letter}
              name={letter}
              value={formValues[letter]}
              onChange={handleChange}
              min="0"
              className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        ))}
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </form>

      {/* Display result if available */}
      {/* TODO: Move result display logic to a separate component */}
      {result && (
        <div className="mt-6 p-6 max-w-md mx-auto bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-center">Results</h2>
          <p className="font-bold">Optimized bracelet texts:</p>
          <ul>
            {result.best_texts.map((text, index) => (
              <li key={index}>{text}</li>
            ))}
          </ul>
          <br />
          <p className="flex flex-wrap">
            <span className="font-bold">
              This optimal solution will leave you with&nbsp;
            </span>
            <span className="font-bold"> {result.minimized_letter_count} </span>
            <span className="font-bold">leftover letters:&nbsp;</span>
          </p>
          <ul>
            {Object.entries(result.leftover_letters)
              .filter(([, count]) => count > 0)
              .map(([letter, count]) => (
                <li key={letter}>
                  {letter}: {count}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LetterForm;
