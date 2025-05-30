import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_PUBLIC_KEY });

const safetySettings = [
    {
      category: "HARM_CATEGORY_HARASSMENT",
      threshold: "BLOCK_LOW_AND_ABOVE",
    },
    {
      category: "HARM_CATEGORY_HATE_SPEECH",
      threshold: "BLOCK_LOW_AND_ABOVE",
    },
  ];

const GeminiAI = async (prompt) => {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: prompt,
    config: {
        safetySettings: safetySettings,
      },
  });
  return response.text;
}

export default GeminiAI;