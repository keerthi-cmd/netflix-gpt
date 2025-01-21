
import OpenAI from "openai";
import { OPENAI_KEY } from "./constants";
//import { GoogleGenerativeAI } from "@google/generative-ai";
const openai = new OpenAI({
  apiKey: OPENAI_KEY,
  dangerouslyAllowBrowser: true,
});

export default openai;

//export const genAI = new GoogleGenerativeAI(OPENAI_KEY);
