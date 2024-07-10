import axios from 'axios';
import { prisma } from '@/db/client';
import { PromptTemplate } from "@langchain/core/prompts";
import { lesssonPlanPrompt } from "@/prompts/lesssonPlanPrompt"; 
import { OpenAI, ChatOpenAI } from "@langchain/openai";
import { RunnableSequence } from "@langchain/core/runnables";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    if (req.method !== 'GET') {
      throw new Error('Invalid request method');
    }

    const earliestStudentData = await prisma.alxuser.findFirst({
      orderBy: {
        createdAt: 'desc',
      },
    });
    const { gradeLevel, topic, criteria, standards, language } = earliestStudentData || {};

  
    // const response = await axios.post("/api/getLLMResponse", {
    //   gradeLevel, 
    //   topic, 
    //   criteria, 
    //   standards, 
    //   language
    // });
    // if (response.status !== 200) {
    //   throw new Error('Failed to get response from LLM');
    // }

    // console.log(response.data);

    const prompt = new PromptTemplate({
      inputVariables: [
        "gradeLevel",
        "topic",
        "criteria",
        "standards",
        "language"
      ],
      template: lesssonPlanPrompt,
    });
  
    const chain = RunnableSequence.from([
      prompt,
      new ChatOpenAI({
        model: "gpt-3.5-turbo",
        apiKey: process.env.OPENAI_API_KEY,
      }),
      new StringOutputParser(),
    ]);
  
    const response = await chain.invoke({
      gradeLevel,
      topic,
      criteria,
      standards,
      language,
    });

    return NextResponse.json(response, { status: 200 });
}