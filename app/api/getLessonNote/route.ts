import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/db/client';
import { PromptTemplate } from '@langchain/core/prompts';
import { lesssonPlanPrompt } from '@/prompts/lesssonPlanPrompt';
import { ChatOpenAI } from '@langchain/openai';
import { RunnableSequence } from '@langchain/core/runnables';
import { StringOutputParser } from '@langchain/core/output_parsers';
import { revalidatePath } from 'next/cache'
 
export async function GET(req: NextRequest) {
  try {
    if (req.method !== 'GET') {
      throw new Error('Invalid request method');
    }

    const earliestStudentData = await prisma.alxuser.findFirst({
      orderBy: {
        createdAt: 'desc',
      },
    });

    if (!earliestStudentData) {
      throw new Error('No student data found');
    }

    const { gradeLevel, topic, criteria, standards, language } = earliestStudentData;

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

    if (!gradeLevel || !topic || !criteria || !standards || !language) {
      throw new Error('Incomplete student data');
    }

    const prompt = new PromptTemplate({
      inputVariables: ['gradeLevel', 'topic', 'criteria', 'standards', 'language'],
      template: lesssonPlanPrompt,
    });

    const chain = RunnableSequence.from([
      prompt,
      new ChatOpenAI({
        model: 'gpt-3.5-turbo',
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

    revalidatePath('/', 'layout')
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
