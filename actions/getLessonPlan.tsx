"use server";

import axios from 'axios';
import {prisma} from '@/db/client';

export const getLessonPlan = async (formData: FormData) => {

  const gradeLevel = formData.get('gradeLevel') as string;
  const topic = formData.get('topic') as string;
  const criteria = formData.get('criteria') as string;
  const standards = formData.get('standards') as string;
  const language = formData.get('language') as string;

  if (!formData) {
    throw new Error('Form data is required.');
  }

  const lessonNote = await prisma.alxuser.create({
    data: {
      gradeLevel,
      topic,
      criteria,
      standards,
      language
    }
  });

  console.log("After saving dsata in database", lessonNote);
}

