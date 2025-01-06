// import { motion } from 'framer-motion'

// export function Footer(){
// return <div>
//      <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.9 }}
//         className="flex flex-col justify-center items-center mt-16"
//       >
//         <div className="mb-6">
//           Follow Me
//         </div>
//         <div className="flex justify-evenly space-x-6 items-center">
//           <SocialIcon href="https://github.com/Nikieta" icon={<GithubIcon />} />
//           <SocialIcon href="https://www.linkedin.com/in/nikita-goswami-91882a251/" icon={<LinkedInIcon />} />
//           <SocialIcon href="https://x.com/nikieta09" icon={<TwitterIcon />} />
//         </div>
//         <motion.footer
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5, delay: 1.1 }}
//           className="flex justify-center items-center mt-7"
//         >
//           <div>
//             © '24 Next.js and Tailwind Portfolio Nikita Goswami.
//           </div>
//         </motion.footer>
//       </motion.div>
//     </div>
 
// }

// function SocialIcon({ href, icon }) {
//   return (
//     <motion.a
//       whileHover={{ scale: 1.1 }}
//       whileTap={{ scale: 0.95 }}
//       href={href}
//       target="_blank"
//       rel="noopener noreferrer"
//       className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg p-4 duration-300"
//     >
//       <i className="text-xl sm:text-2xl md:text-3xl">
//         {icon}
//       </i>
//     </motion.a>
//   )
// }

// function GithubIcon() {
//   return (
//     <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
//       <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
//     </svg>
//   )
// }

// function LinkedInIcon() {
//   return (
//     <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
//       <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
//       <rect x="2" y="9" width="4" height="12"></rect>
//       <circle cx="4" cy="4" r="2"></circle>
//     </svg>
//   )
// }

// function TwitterIcon() {
//   return (
//     <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
//       <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
//     </svg>
//   )
// }
                    

import { motion } from 'framer-motion'

export function Footer(){
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.9 }}
      className="flex flex-col justify-center items-center mt-16 px-4 md:px-0"
    >
      <div className="mb-6 text-lg md:text-xl">
        Follow Me
      </div>
      <div className="flex justify-evenly space-x-4 md:space-x-6 items-center">
        <SocialIcon href="https://github.com/Nikieta" icon={<GithubIcon />} />
        <SocialIcon href="https://www.linkedin.com/in/nikita-goswami-91882a251/" icon={<LinkedInIcon />} />
        <SocialIcon href="https://x.com/nikieta09" icon={<TwitterIcon />} />
      </div>
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        className="flex justify-center items-center mt-7 text-center"
      >
        <div className="text-sm md:text-base">
          © '24 Next.js and Tailwind Portfolio Nikita Goswami.
        </div>
      </motion.footer>
    </motion.div>
  )
}

function SocialIcon({ href, icon }) {
  return (
    <motion.a
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg p-2 md:p-4 duration-300"
    >
      <i className="text-xl sm:text-2xl md:text-3xl">
        {icon}
      </i>
    </motion.a>
  )
}

function GithubIcon() {
  return (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect x="2" y="9" width="4" height="12"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  )
}

function TwitterIcon() {
  return (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
    </svg>
  )
}

