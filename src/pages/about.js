// import { NavBar } from '../components/NavBar'
// import { Footer } from '../components/Footer'
// import { Img } from '../components/Img'

// export default function About(){
//     return (
//         <>
//         <NavBar/>
//         <div className="w-full flex justify-center items-center">
//         <div className="container mx-auto">
//              <div className='block sm:flex sm:gap-10 mt-10 sm:mt-20'>
//              <div className="w-full sm:w-1/4 mb-7 sm:mb-0">
//              <img src='/img.jpg' alt="Image" className='rounded-lg w-96' />
//              </div>
//              <div className="font-general-regular w-full sm:w-3/4 text-left">
         
// <p className="mb-4 text-ternary-dark dark:text-ternary-light text-lg">Hello! I’m Nikita Goswami, a Full Stack Developer and Machine Learning Enthusiast passionate about crafting innovative and user-focused solutions. With a strong foundation in development and hands-on experience through impactful projects and an internship, I’m eager to bring my skills to challenging roles in the tech industry.


// </p>
// <p className="mb-4 text-ternary-dark dark:text-ternary-light text-lg">I’m always open to learning new technologies and adapting to emerging trends, ensuring I stay at the forefront of innovation. Ready to take the next step in my professional journey, I’m excited to contribute to dynamic teams and make a meaningful impact.</p>
// <p className="mb-4 text-ternary-dark dark:text-ternary-light text-lg">
// Feel free to explore the Projects and Experience sections to know more about my work!</p>

//             </div>
//              <div>
//         </div>
//         </div>


//         </div>
       

       

//         </div>
       
          
           
//         <Footer/>
//         </>
//     )

import { NavBar } from '../components/NavBar'
import { Footer } from '../components/Footer'
import { useEffect } from 'react'

export default function About(){
    useEffect(() => {
        // Check for dark mode preference on initial load
        const isDarkMode = localStorage.getItem('darkMode') === 'true'
        if (isDarkMode) {
            document.documentElement.classList.add('dark')
        }
    }, [])

    return (
        <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
            <NavBar/>
            <main className="flex-grow">
                <div className="container mx-auto px-4 py-8 md:py-16">
                    <div className='flex flex-col md:flex-row md:gap-10'>
                        <div className="w-full md:w-1/4 mb-8 md:mb-0">
                            <img src='/img.jpg' alt="Nikita Goswami" className='rounded-lg w-full max-w-sm mx-auto' />
                        </div>
                        <div className="font-general-regular w-full md:w-3/4 text-left">
                            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">About Me</h1>
                            <p className="mb-4 text-gray-700 dark:text-gray-300 text-base md:text-lg">
                                Hello! I'm Nikita Goswami, a Full Stack Developer and Machine Learning Enthusiast passionate about crafting innovative and user-focused solutions. With a strong foundation in development and hands-on experience through impactful projects and an internship, I'm eager to bring my skills to challenging roles in the tech industry.
                            </p>
                            <p className="mb-4 text-gray-700 dark:text-gray-300 text-base md:text-lg">
                                I'm always open to learning new technologies and adapting to emerging trends, ensuring I stay at the forefront of innovation. Ready to take the next step in my professional journey, I'm excited to contribute to dynamic teams and make a meaningful impact.
                            </p>
                            <p className="mb-4 text-gray-700 dark:text-gray-300 text-base md:text-lg">
                                Feel free to explore the Projects and Experience sections to know more about my work!
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    )
}
