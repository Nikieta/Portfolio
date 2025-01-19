import { motion } from "framer-motion";

export function HomePage() {
  const text = "Hi, I'm Nikita Goswami".split(" ");
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="px-4 md:px-0"
    >
      <div className="w-full flex flex-col md:flex-row justify-center items-center">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:mr-10 mb-8 md:mb-0"
        >
          <div className='text-indigo-500 font-bold text-3xl md:text-5xl'>
            {text.map((el, i) => (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.25,
                  delay: i / 10,
                }}
                key={i}
              >
                {el}{" "}
              </motion.span>
            ))}
            <br />
            <br />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-gray-500 font-semibold text-xl md:text-3xl"
            >
              A Full Stack and Machine Learning Developer.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-10"
          >         
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              download="Nikita Goswami '24.pdf"
              href="/Nikita-Goswami-24.pdf"
              className="font-general-medium flex justify-center items-center w-full sm:w-48 mt-8 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-100 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-600 hover:text-white duration-500"
              aria-label="Download Resume"
            >
              <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="8 12 12 16 16 12"></polyline>
                <line x1="12" y1="8" x2="12" y2="16"></line>
              </svg>
              <span className="text-sm sm:text-lg font-general-medium duration-100">Download CV</span>
            </motion.a>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full md:w-auto"
        >
         <div className="relative rounded-2xl overflow-hidden bg-white dark:bg-[#f5f0ff] p-2">
      <img 
        src="shorthaircoder.gif" 
        alt="Animated developer illustration" 
        className="h-64 md:h-96 w-auto mx-auto rounded-xl object-contain" 
      />
    </div>
        
        </motion.div>
      </div>
    </motion.div>
  );
}

