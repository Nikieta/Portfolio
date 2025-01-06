// import Link from 'next/link';   

// export function Card(){


//     return (
//         <div className='flex justify-center h-1/2 w-full gap-20 '>
 
//  <div className="text-center flex flex-col justify-center items-center rounded-2xl shadow-xl hover:shadow-2xl cursor-pointer ">
//     <Link href="https://github.com/Nikieta/Face_Detection">
//     <img src="/faces.jpg" alt="" className='h-80 w-80 rounded-t-xl' />
//     </Link>
//     <div className='flex flex-col justify-center items-center h-20 w-72 text-center px-4 py-4'>
//     <p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light">Face Detection</p>
//     <span className="text-lg text-ternary-dark dark:text-ternary-light">Machine Learning</span>
   

//     </div>
//    </div>
//    <div className=" text-center flex flex-col justify-center items-center rounded-2xl shadow-xl hover:shadow-2xl cursor-pointer ">
//     <Link href="https://github.com/Nikieta/Music-Recom">
//     <img src="/musics.png" alt="" className='h-80 w-80 rounded-t-xl' /> 
//     </Link>
//     <div className='h-20 w-72 text-center px-4 py-4'>
//     <p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light">Music Recommendation</p>
//     <span className="text-lg text-ternary-dark dark:text-ternary-light">Machine Learning</span>
   
//     </div>        
//    </div>
 
 
//  </div>

  
//     )
// }

import React from 'react';
import { motion } from 'framer-motion';

export function Card({ title, description, imageSrc, technologies, detailsLink }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
    >
      <img 
        src={imageSrc} 
        alt={title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{title}</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span key={index} className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-indigo-200 dark:text-indigo-900">
              {tech}
            </span>
          ))}
        </div>
        <a href={detailsLink} className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium">
          Learn More
        </a>
      </div>
    </motion.div>
  );
}

