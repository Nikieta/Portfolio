// // import Link from "next/link"
// // export function NavBar() {
// //     return <>
    
// //         <div className="z-10 flex justify-between items-center m-10 ">
// //             <div className="">

// //             </div>


// //             <div className="flex space-x-11">
// //                 <h1>
// //                     <Link href='/' className=" hover:text-blue-700">
// //                         Home
// //                     </Link>
                    
// //                 </h1>
// //                 <h1>
// //                     <Link href='/about' className=" hover:text-blue-700">
// //                         About
// //                     </Link>
// //                 </h1>

// //                 <h1>
// //                     <Link href='/projects' className=" hover:text-blue-700">
// //                         Project
// //                     </Link>
// //                 </h1>
// //                 <h1>
// //                     <Link href='/experience' className=" hover:text-blue-700">
// //                        Experience
// //                     </Link>
// //                 </h1>
// //                 <h1>
// //                     <Link href='/contact' className=" hover:text-blue-700">
// //                         Contact
// //                     </Link>
// //                 </h1>
// //             </div>

      
// //             <div aria-label="Theme Switcher" className="ml-8 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer mr-6"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg></div>
        
       
// //         </div>
// //     </>

// // }


// import Link from "next/link"
// import { motion } from "framer-motion"

// export function NavBar() {
//     const navItems = [
//         { href: '/', label: 'Home' },
//         { href: '/about', label: 'About' },
//         { href: '/projects', label: 'Projects' },
//         { href: '/experience', label: 'Experience' },
//         { href: '/contact', label: 'Contact' },
//     ]

//     return (
//         <motion.nav 
//             initial={{ y: -50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.5 }}
//             className="z-10 flex justify-between items-center m-10"
//         >
//             <div className=""></div>

//             <div className="flex space-x-11">
//                 {navItems.map((item, index) => (
//                     <motion.div
//                         key={item.href}
//                         whileHover={{ scale: 1.1 }}
//                         whileTap={{ scale: 0.95 }}
//                     >
//                         <Link href={item.href} className="hover:text-blue-700">
//                             {item.label}
//                         </Link>
//                     </motion.div>
//                 ))}
//             </div>

//             <motion.div 
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.95 }}
//                 aria-label="Theme Switcher" 
//                 className="ml-8 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer mr-6"
//             >
//                 <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
//                 </svg>
//             </motion.div>
//         </motion.nav>
//     )
import Link from "next/link"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isDarkMode, setIsDarkMode] = useState(false)

    useEffect(() => {
        // Initialize dark mode state from localStorage
        const savedDarkMode = localStorage.getItem('darkMode') === 'true'
        setIsDarkMode(savedDarkMode)
        if (savedDarkMode) {
            document.documentElement.classList.add('dark')
        }
    }, [])

    const toggleDarkMode = () => {
        const newDarkMode = !isDarkMode
        setIsDarkMode(newDarkMode)
        localStorage.setItem('darkMode', String(newDarkMode))
        
        if (newDarkMode) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }

    const navItems = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/projects', label: 'Projects' },
        { href: '/experience', label: 'Experience' },
        { href: '/contact', label: 'Contact' },
    ]

    return (
        <motion.nav 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="z-10 flex justify-between items-center p-4 md:p-10 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
        >
            <div className=""></div>

            {/* Mobile menu button */}
            <div className="md:hidden">
                <button 
                    onClick={() => setIsMenuOpen(!isMenuOpen)} 
                    className="text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-indigo-500"
                >
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex space-x-6 lg:space-x-11">
                {navItems.map((item) => (
                    <motion.div
                        key={item.href}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link 
                            href={item.href} 
                            className="hover:text-indigo-400 dark:text-gray-200 dark:hover:text-indigo-500"
                        >
                            {item.label}
                        </Link>
                    </motion.div>
                ))}
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="absolute top-16 left-0 right-0 bg-white dark:bg-gray-800 shadow-md md:hidden">
                    {navItems.map((item) => (
                        <Link 
                            key={item.href} 
                            href={item.href} 
                            className="block py-2 px-4 text-sm hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            )}

            <motion.button
                onClick={toggleDarkMode}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Theme Switcher" 
                className="p-2 md:p-3 rounded-xl cursor-pointer bg-gray-100 dark:bg-gray-800"
            >
                {isDarkMode ? (
                    <svg 
                        stroke="currentColor" 
                        fill="currentColor" 
                        strokeWidth="0" 
                        viewBox="0 0 24 24" 
                        className="text-yellow-500 text-xl" 
                        height="1em" 
                        width="1em" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z" />
                    </svg>
                ) : (
                    <svg 
                        stroke="currentColor" 
                        fill="none" 
                        strokeWidth="2" 
                        viewBox="0 0 24 24" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        className="text-gray-800 dark:text-gray-200 text-xl" 
                        height="1em" 
                        width="1em" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                    </svg>
                )}
            </motion.button>
        </motion.nav>
    )
}

