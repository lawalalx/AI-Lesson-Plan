"use client";

import React from 'react';
import { getLessonPlan } from '@/actions/getLessonPlan';
import {useRouter } from 'next/navigation';


const LessonPlanForm = () => {

  const router = useRouter();

  const sendGetLessonPlan = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      await getLessonPlan(formData);
      router.push('/show_lesson_plan');
      
    } catch (error) {
      console.error(error);
    }
  }



  return (
    <div className="max-w-xl mx-auto p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Lesson Plan</h2>
      <p className="mb-6">Generate a lesson plan for a topic or objective you’re teaching.</p>

      <form onSubmit={sendGetLessonPlan}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="grade-level">
            Grade level:
          </label>
          <select
            id="grade-level"
            name='gradeLevel'
            className="w-full p-2 border border-gray-300 rounded-lg"
            required
          >
            <option>Primary 1</option>
            <option>Primary 2</option>
            <option>Primary 3</option>
            <option>Primary 4</option>
            <option>Primary 5</option>
            {/* Add more grade options here */}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="topic">
            Topic, Standard, or Objective:
          </label>
          <textarea
            id="topic"
            className="w-full p-2 border border-gray-300 rounded-lg"
            rows={4}
            name='topic'
            placeholder="topic, standard, or longer description of what you’re teaching"
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="criteria">
            Briefly describe students
          </label>
          <textarea
            id="criteria"
            className="w-full p-2 border border-gray-300 rounded-lg"
            rows={2}
            name='criteria'
            placeholder="These students are new to the topic and need a lot of guidance."
            required
          ></textarea>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="standards">
            Standards Set to Align to:
          </label>
          <textarea
            id="standards"
            className="w-full p-2 border border-gray-300 rounded-lg"
            rows={2}
            name='standards'
            placeholder="Follow National Curriculum Standards for this grade level."
            required  
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="language">
            Select Language:
          </label>
          <select
            id="language"
            name='language'
            className="w-full p-2 border border-gray-300 rounded-lg"
            required
          >
            <option value="en">English</option>
            <option value="yo">Yoruba</option>
            <option value="ha">Hausa</option>
            <option value="ig">Igbo</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
        >
          Generate
        </button>
      </form>
    </div>
  );
};

export default LessonPlanForm;
