// import { NavBar } from '../components/NavBar'
// import { Footer } from '../components/Footer'
// import { HomePage } from '../components/HomePage'
// import { motion } from 'framer-motion'

// export default function Home() {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//     >
//       <NavBar />
//       <HomePage />
//       <Footer />

//     </motion.div>
//   );
// }

import { NavBar } from '../components/NavBar'
import { Footer } from '../components/Footer'
import { HomePage } from '../components/HomePage'
import { motion } from 'framer-motion'
import { useEffect } from 'react'

export default function Home() {
  // Check for dark mode preference on initial load
  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true'
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
    >
      <NavBar />
      <main className="flex-grow">
        <HomePage />
      </main>
      <Footer />
    </motion.div>
  )
}
