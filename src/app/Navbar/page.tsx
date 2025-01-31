import React from 'react'

const Navbar = () => {
  return (
    <header className="text-gray-600 body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
       

            
       <img className=' w-18 h-12' src="data:image/jpeg;base64,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" alt="" />
        <span className="ml-3 text-xl font-semibold">Fruit Store</span>
      </a>
      <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
        <a className="mr-5 hover:text-gray-900">Home</a>
        <a className="mr-5 hover:text-gray-900">About</a>
        <a className="mr-5 hover:text-gray-900">products</a>
        <a className="mr-5 hover:text-gray-900">Account</a>
      </nav>
      <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
   Buy now
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="w-4 h-4 ml-1"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </header>
  
  )
}

export default Navbar
