
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

export const getExplanation = async (question: string, solution: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are an expert middle school science teacher. Please provide a detailed, easy-to-understand explanation for a Grade 7 student for the following question and its solution. 
      Question: ${question}
      Solution: ${solution}
      Break down the concepts simply and use analogies if helpful.`,
    });
    return response.text;
  } catch (error) {
    console.error("Error fetching explanation:", error);
    return "Could not load explanation at this time.";
  }
};
