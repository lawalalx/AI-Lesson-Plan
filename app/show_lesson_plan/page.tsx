"use client";

import React, { useEffect } from 'react';
import axios from 'axios';


const page =  () => {
  const [ lessonNote, setLessonNote ] = React.useState({});


  useEffect(() => {
    const fetchLessonNote = async () => {
      try {
        const result = await axios.get("/api/getLessonNote");

        console.log(result.data);

        const formattedResponse = result.data
        .replace(/\*\*/g, "")
        .replace(/\n/g, "<br>");
      
        setLessonNote(formattedResponse);

        console.log(lessonNote)
      } catch (error) {
        console.error(error);
      }
      
    };
    fetchLessonNote();
  }, []); 


  return (
    <div>
      {lessonNote && (
        <div className='w-max md:max-w-[750px] p-4'>
          <h2 className='font-semibold text-2xl'>Lesson Plan</h2>
          {
            lessonNote && <div dangerouslySetInnerHTML={{ __html: lessonNote }} />
          }
          
        </div>
      )}
    </div>
  )
}

export default page