// import { CardExp } from "./CardExp";
// export function CardContact({handleSubmit}){
//     return <div className='flex justify-center items-center w-full h-1/2'>
//     {/* <div className="flex flex-col items-center rounded-2xl shadow-xl hover:shadow-2xl cursor-pointer h-80 w-3/5"> */}


// <div className="flex justify-center flex-col-reverse lg:flex-row ">
//     <div className="w-full">
//         <div className="leading-loose">
//             <form onSubmit={handleSubmit} className='w-full m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left rounded-2xl shadow-xl hover:shadow-2xl cursor-pointer'>
//                 <p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
//                     Contact Form
//                 </p>
//             <div className="font-general-regular mb-4">
//                 <label className="block text-lg text-primary-dark dark:text-primary-light mb-1" htmlFor="name">
//                     Full Name
//                 </label>
//             <input className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md" type="text" id="fullName" name="fullName" placeholder="Your Name" aria-label="Name" required=""/>
//             </div>
//                 <div className="font-general-regular mb-4">
//                     <label className="block text-lg text-primary-dark dark:text-primary-light mb-1" htmlFor="email">
//                         Email
//                     </label>
//                 <input className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md" type="email" id="email" name="email" placeholder="Your email" aria-label="Email" required=""/>
//                 </div>
//             <div className="font-general-regular mb-4">
//                 <label className="block text-lg text-primary-dark dark:text-primary-light mb-1" htmlFor="subject">
//                     Subject
//                 </label>
//             <input className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md" type="text" id="subject" name="subject" placeholder="Subject" aria-label="Subject" required=""/>
//             </div>
//             <div className="mt-6">
//                 <label className="block text-lg text-primary-dark dark:text-primary-light mb-2" htmlFor="message">
//                     Message
//                 </label>
//                 <textarea className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md" id="message" name="message" cols="14" rows="6" required aria-label="Message">
//                 </textarea>
//             </div>
//             <div className="font-general-medium w-40 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500">
//                 <button type="submit">Send Message</button>
//             </div>
//         </form>
//         </div>
//     </div>
//         <div className="w-full lg:w-1/2 ml-20">
//             <div className="text-left max-w-xl px-6">
//                 <h2 className="font-general-medium text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8">
//                     Contact details
//                 </h2>
//                 <ul className="font-general-regular">
//                     <li className="flex ">
//                         <i className="text-2xl text-gray-500 dark:text-gray-400 mr-4">
//                             <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z">
//                                 </path>
//                                     <circle cx="12" cy="10" r="3">
//                                     </circle>
//                             </svg>
//                         </i><span className="text-lg mb-4 text-ternary-dark dark:text-ternary-light">
//                             402 Clifton, One Hiranandani Park,Thane West, Maharashtra, India
//                             </span>
//                     </li>
//                     <li className="flex ">
//                         <i className="text-2xl text-gray-500 dark:text-gray-400 mr-4">
//                             <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
//                                 <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z">
//                                 </path>
//                                     <polyline points="22,6 12,13 2,6">
//                                     </polyline>
//                             </svg>
//                         </i>
//                     <span className="text-lg mb-4 text-ternary-dark dark:text-ternary-light">
//                         nikieta09@gmail.com
//                     </span>
//                     </li>
//                     <li className="flex ">
//                         <i className="text-2xl text-gray-500 dark:text-gray-400 mr-4">
//                             <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
//                                 <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z">
//                                 </path>
//                             </svg>
//                         </i>
//                     <span className="text-lg mb-4 text-ternary-dark dark:text-ternary-light">
//                         +91 7400094481
//                     </span>
//                     </li>
//                     </ul>
//                 </div>
//             </div>
//         </div>

//     </div>
//     //  </div>


// }

export function CardContact({ handleSubmit }) {
    return (
      <div className='flex justify-center items-center w-full py-8 px-4 md:px-8 lg:px-16'>
        <div className="flex flex-col lg:flex-row justify-between w-full max-w-6xl">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <div className="leading-loose">
              <form onSubmit={handleSubmit} className='w-full p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left'>
                <h2 className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
                  Contact Form
                </h2>
                <div className="font-general-regular mb-4">
                  <label className="block text-lg text-primary-dark dark:text-primary-light mb-1" htmlFor="fullName">
                    Full Name
                  </label>
                  <input className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md" type="text" id="fullName" name="fullName" placeholder="Your Name" aria-label="Name" required="" />
                </div>
                <div className="font-general-regular mb-4">
                  <label className="block text-lg text-primary-dark dark:text-primary-light mb-1" htmlFor="email">
                    Email
                  </label>
                  <input className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md" type="email" id="email" name="email" placeholder="Your email" aria-label="Email" required="" />
                </div>
                <div className="font-general-regular mb-4">
                  <label className="block text-lg text-primary-dark dark:text-primary-light mb-1" htmlFor="subject">
                    Subject
                  </label>
                  <input className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md" type="text" id="subject" name="subject" placeholder="Subject" aria-label="Subject" required="" />
                </div>
                <div className="mt-6">
                  <label className="block text-lg text-primary-dark dark:text-primary-light mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md" id="message" name="message" cols="14" rows="6" aria-label="Message" required></textarea>
                </div>
                <div className="mt-6">
                  <button type="submit" className="font-general-medium w-full sm:w-48 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg duration-500">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full lg:w-2/5">
            <div className="text-left">
              <h2 className="font-general-medium text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8">
                Contact details
              </h2>
              <ul className="font-general-regular">
                <li className="flex items-center mb-4">
                  <i className="text-2xl text-gray-500 dark:text-gray-400 mr-4">
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  </i>
                  
                <span>📍 Mumbai, Maharashtra, India  </span>
             
                </li>
                <li className="flex items-center mb-4">
                  <i className="text-2xl text-gray-500 dark:text-gray-400 mr-4">
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </i>
                  <span>✉️ nikita.goswami78@nmims.in</span>
              


                </li>
                
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  


