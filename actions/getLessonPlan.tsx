"use server";

import axios from 'axios';
import {prisma} from '@/db/client';

export const getLessonPlan = async (formData: FormData) => {
  
  const gradeLevel = formData.get('gradeLevel');
  const topic = formData.get('topic');
  const criteria = formData.get('criteria');
  const standards = formData.get('standards');
  const language = formData.get('language');

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

