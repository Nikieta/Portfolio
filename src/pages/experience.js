// import { CardExp } from "@/components/CardExp";
// import { NavBar } from "@/components/NavBar";
// import {Footer } from "@/components/Footer";


// export default function(){
//     return (
//         <div>
//             <NavBar/>
//             <CardExp/>
//             <Footer/>
//         </div>
        
      
//     )
import React, { useEffect } from 'react';
import { CardExp } from "@/components/CardExp";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";

export default function Experience() {
  useEffect(() => {
    // Check for dark mode preference on initial load
    const isDarkMode = localStorage.getItem('darkMode') === 'true'
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    }
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <NavBar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-indigo-600 dark:text-indigo-400">My Experience</h1>
        <div className="space-y-8">
          <CardExp />
        </div>
      </main>
      <Footer />
    </div>
  );
}

