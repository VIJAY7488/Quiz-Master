import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    // Change navbar style on scroll
    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 10 ){
                setIsScrolled(true);
            }
            else{
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? "bg-white/80 backdrop-blur-lg shadow-sm" : "bg-transparent"
      }`}>
      <div className='container max-w-screen-xl mx-auto px-4 sm:px-6'>
        <div className='flex justify-between items-center h-16'>
          <Link to='/'
          className='flex items-center space-x-2 text-[hsl(210,100%,50%)] font-medium text-lg transition-opacity hover:opacity-80'>
          <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            <span className='hidden sm:inline-block'>Quiz Master</span>
          </Link>
        </div>
      </div>
      <div></div>
    </nav>
  )
}

export default Navbar
