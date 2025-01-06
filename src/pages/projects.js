// import { Footer } from '../components/Footer'
// import { NavBar } from '../components/NavBar'
// import { Card } from '../components/Card'

// export default function Projects(){
//     return (
//         <>
//         <NavBar/>
        
//         <Card/>
   
//         <Footer/>
//         </>
//     )
import { Footer } from '../components/Footer'
import { NavBar } from '../components/NavBar'
import { Card } from '../components/Card'
import { useEffect } from 'react'

const projectsData = [
  {
    title: "Face Detection",
    description: "A Face Detection Project built using OpenCV and Python",
    imageSrc: "/faces.jpg",
    technologies: ["Python", "OpenCV", "TensorFlow"],
    detailsLink: "https://github.com/Nikieta/Face_Detection"
  },
  {
    title: "Music Recommendation",
    description: "A Music Recommendation Project built using Python",
    imageSrc: "/musics.png",
    technologies: ["Python", "OpenCV", "TensorFlow"],
    detailsLink: "https://github.com/Nikieta/Music-Recom"
  }
];

export default function Projects() {
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
      <main className="flex-grow container mx-auto px-4 py-8 md:py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-indigo-600 dark:text-indigo-400">My Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {projectsData.map((project, index) => (
            <Card 
              key={index}
              title={project.title}
              description={project.description}
              imageSrc={project.imageSrc}
              technologies={project.technologies}
              detailsLink={project.detailsLink}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

