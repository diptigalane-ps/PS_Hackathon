import { GoogleGenerativeAI } from "@google/generative-ai";
import env from "../env.js";
 
const genAI = new GoogleGenerativeAI(env.genAi.key);
const model = genAI.getGenerativeModel({ model: env.genAi.modal });

export const getTip = async () => {
    const prompt = "As a financial advisor, provide a financial advice to 20 to 40 year old Indian customer, provide the output in json format and in maximum 20 words, provide unique advice everytime we call for adivce"; 
    const result = await model.generateContent(prompt);
    const cleanedString = result.response.text().replace(/```json|```/g, '').trim();
    const decodedString = cleanedString.replace(/&amp;#x22;/g, '"');
    return JSON.parse(decodedString);
}