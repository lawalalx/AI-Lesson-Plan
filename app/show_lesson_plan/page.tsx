"use client";

import React, { useEffect } from 'react';
import axios from 'axios';
import { Circles } from 'react-loader-spinner'


const page =  () => {
  const [ lessonNote, setLessonNote ] = React.useState({});


  useEffect(() => {
    const fetchLessonNote = async () => {
      try {
        const result = await fetch("/api/getLessonNote",
                                       next: {
                                          revalidate: 0.5,
                                     },
                                  );

        const data = await result.json();

        const formattedResponse = data
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
        <div className='w-[400px] md:w-max md:max-w-[750px] p-4'>
          <h2 className='font-semibold text-2xl'>Lesson Plan</h2>
          {Object.keys(lessonNote).length === 0 ? 
            (
              <div className='flex items-center justify-center h-screen'>
                <Circles
                  height="80"
                  width="80"
                  color="#4fa94d"
                  ariaLabel="circles-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                />
              </div>
            ) : 
            (
              <div dangerouslySetInnerHTML={{ __html: lessonNote }} />
            )
          }
        </div>
      )}
    </div>
  )
}

export default page
