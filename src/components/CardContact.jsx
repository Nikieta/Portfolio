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
                  
                <span>Mumbai, Maharashtra, India  </span>
             
                </li>
                <li className="flex items-center mb-4">
                  <i className="text-2xl text-gray-500 dark:text-gray-400 mr-4">
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </i>
                  <span>nikieta09@gmail.com</span>
              


                </li>
                
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  


