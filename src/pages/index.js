import { NavBar } from '../components/NavBar'
import { Footer } from '../components/Footer'
import { HomePage } from '../components/HomePage'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
export default function Home() {
 
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
