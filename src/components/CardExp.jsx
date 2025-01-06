// export function CardExp(){

//     return <div className='flex justify-center items-center'>
//     <div className="flex justify-start items-center rounded-2xl shadow-xl hover:shadow-2xl cursor-pointer h-80 w-4/5">
// <img src="/Biofield.webp" alt="" className='h-64 w-64 rounded-xl ml-10' />
// <div className='flex justify-center items-center h-52 w-full px-6 py-4'>
// <div className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light"><b><i>Frontend Developer at
// Indian Institute of Technology,Ropar</i></b><br></br> <i>(August 2024 to Present)</i>
// <br></br>
// <br></br>
// Built a responsive and dynamic web application using Next.js and Tailwind CSS, streamlining connections between farmers, industry stakeholders, and logistics providers.
// <br></br>
// Created reusable, intuitive UI components for a seamless and user-centric experience.
// <br></br>
// Transformed Figma designs into pixel-perfect, production-grade code with precision and consistency.</div>

// </div>
// </div>
// </div>

// }

import React from 'react';

export function CardExp() {
  return (
    <div className='flex justify-center items-center p-4 md:p-8'>
      <div className="flex flex-col md:flex-row justify-start items-center rounded-2xl shadow-xl hover:shadow-2xl cursor-pointer w-full max-w-4xl transition duration-300 ease-in-out">
        <img src="/Biofield.webp" alt="IIT Ropar" className='h-48 w-48 md:h-64 md:w-64 rounded-xl m-4 md:m-10 object-cover' />
        <div className='flex justify-center items-center w-full p-4 md:p-6'>
          <div className="font-general-medium text-sm sm:text-base md:text-lg text-ternary-dark dark:text-ternary-light">
            <h2 className="font-bold italic text-lg md:text-xl mb-2">Frontend Developer at Indian Institute of Technology, Ropar</h2>
            <p className="italic mb-4">(August 2024 to Present)</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Built a responsive and dynamic web application using Next.js and Tailwind CSS, streamlining connections between farmers, industry stakeholders, and logistics providers.</li>
              <li>Created reusable, intuitive UI components for a seamless and user-centric experience.</li>
              <li>Transformed Figma designs into pixel-perfect, production-grade code with precision and consistency.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}




