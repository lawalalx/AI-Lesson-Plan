import React from 'react';
import { getLessonPlan } from '@/actions/getLessonPlan';

const LessonPlanForm = () => {
  return (
    <div className="max-w-xl mx-auto p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Lesson Plan</h2>
      <p className="mb-6">Generate a lesson plan for a topic or objective you’re teaching.</p>

      <form action={getLessonPlan}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="grade-level">
            Grade level:
          </label>
          <select
            id="grade-level"
            className="w-full p-2 border border-gray-300 rounded-lg"
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
            placeholder="topic, standard, or longer description of what you’re teaching.
            If you include the full description, you can use any standard worldwide. For example, “HS-PS1-1 Use the periodic table as a model to predict the relative properties of elements based on the patterns of electrons in the outermost energy level of atoms."
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="criteria">
            Additional Criteria:
          </label>
          <textarea
            id="criteria"
            className="w-full p-2 border border-gray-300 rounded-lg"
            rows={2}
            placeholder="Students are in a unit about world regions, students last lesson was on the geography of the United States, have the lesson include group work, etc."
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
            placeholder="Any standards worldwide (CCSS, TEKS, Ontario, Florida)"
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="language">
            Select Language:
          </label>
          <select
            id="language"
            className="w-full p-2 border border-gray-300 rounded-lg"
          >
            <option>Yoruba</option>
            <option>Hausa</option>
            <option>Igbo</option>
          </select>
        </div>

        <button
          type="button"
          className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
        >
          Generate
        </button>
      </form>
    </div>
  );
};

export default LessonPlanForm;
