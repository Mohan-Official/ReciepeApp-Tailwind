import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const handleToggle = () =>
  {
    if(document.getElementById('menu').classList.contains('hidden'))
    {
      document.getElementById('menu').classList.remove('hidden');
    }
    else
    {
      document.getElementById('menu').classList.add('hidden');
    }
  }

  return (
    <>
      {/* <h1 className="bg-red-500 ">Welcome to Chat Application</h1> */}
        <body className='text-gray-600'>
        <div className='grid md:grid-cols-3'>
        <div className='md:col-span-1 md:flex md:justify-end'>
          <nav className='text-right'>
            <div className='flex justify-between items-center'>
              <h1 className='font-bold uppercase border-b border-gray-200'>
                <a href="/">AVM Restaurant</a>
              </h1>
              <div className='px-4 cursor-pointer md:hidden' id='burgerIcon' onClick={handleToggle}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </div>
            </div>
            <ul className='text-sm mt-6 hidden md:block' id='menu'>
              <li className='text-gray-700 font-bold py-2'>
                <a href="/" className='flex px-4 justify-end  border-r-4 border-primary'>
                  <span  className='pr-6 hover:text-primary'>Home</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                </a>
              </li>
              <li className='py-2'>
                <a href="/" className='flex px-4 justify-end  border-r-4 border-white'>
                  <span className='pr-6 hover:text-primary'>About</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                  </svg>
                </a>
              </li>
              <li className='py-2'>
                <a href="/" className='flex px-4 justify-end  border-r-4 border-white'>
                  <span className='pr-6 hover:text-primary'>Contact</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                </a>
              </li>
              <li className='py-2'>
                <a href="/" className='flex px-4 justify-end  border-r-4 border-white'>
                  <span className='pr-6 hover:text-primary'>Menu</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        {/* //// end of the nav bar //// */}
        <main className='px-16 py-16 bg-gray-100 md:col-span-2'>
          <div className='flex justify-center md:justify-end'>
            <a href="#" className='btn text-primary border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-500'>Log in</a>
            <a href="#" className='btn text-primary ml-4 border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-500'>Sign Up</a>
          </div>

          {/* <div className='flex'>
            <div className='bg-red-500 h-4 w-6'></div>
            <div className='bg-blue-500 h-8 w-6'></div>
            <div className='bg-green-500 h-12 w-6'></div>
          </div> */}

          <header>
            <h2 className='text-gray-700 text-6xl font-semibold'>Recipes</h2>
            <h3 className='text-2xl font-semibold'>AVM Special</h3>
          </header>

          <div>
            <h4 className='font-bold mt-12 pb-2 border-b border-gray-200'>Latest Recipes</h4>

            <div className='mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
              <div className='bg-white rounded overflow-hidden shadow-md relative hover:shadow-lg'>
                <img src="https://wallpapercave.com/wp/wp12268592.jpg" className='w-full h-32 sm:h-48 object-cover' alt="" />
                <div className='m-4'>
                  <span className='font-bold'>5 Bean chilli stew</span>
                  <span className='block text-gray-500 text-sm'>Recipe by Mario</span>
                </div>
                <div className='card-elements'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 inline-block">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  <span className='pl-1'>25 mins</span>
                </div>
              </div>

              <div className='bg-white rounded overflow-hidden shadow-md relative hover:shadow-lg'>
                <img src="https://wallpapercave.com/wp/wp12268592.jpg" className='w-full h-32 sm:h-48 object-cover' alt="" />
                <div className='m-4'>
                  <span className='font-bold'>5 Bean chilli stew</span>
                  <span className='block text-gray-500 text-sm'>Recipe by Mario</span>
                </div>
                <div className='card-elements'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 inline-block">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  <span className='pl-1'>25 mins</span>
                </div>
              </div>

              <div className='bg-white rounded overflow-hidden shadow-md relative hover:shadow-lg'>
                <img src="https://wallpapercave.com/wp/wp12268592.jpg" className='w-full h-32 sm:h-48 object-cover' alt="" />
                <div className='m-4'>
                  <span className='font-bold'>5 Bean chilli stew</span>
                  <span className='block text-gray-500 text-sm'>Recipe by Mario</span>
                </div>
                <div className='card-elements'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 inline-block">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  <span className='pl-1'>25 mins</span>
                </div>
              </div>

              <div className='bg-white rounded overflow-hidden shadow-md relative hover:shadow-lg'>
                <img src="https://wallpapercave.com/wp/wp12268592.jpg" className='w-full h-32 sm:h-48 object-cover' alt="" />
                <div className='m-4'>
                  <span className='font-bold'>5 Bean chilli stew</span>
                  <span className='block text-gray-500 text-sm'>Recipe by Mario</span>
                </div>
                <div className='card-elements'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 inline-block">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  <span className='pl-1'>25 mins</span>
                </div>
              </div>
            </div>

            <h4 className='font-bold mt-12 pb-2 border-b border-gray-200'>Most Popular</h4>
            <div className='mt-8'>
              {/* //// Card goes here //// */}
            </div>

            <div className='flex justify-center'>
              <div className='btn bg-secondary-100 text-secondary-200 hover:shadow-inner transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300'>
                Load More
              </div>
            </div>
          </div>
        </main>
      </div>

        </body>
      </>
  )
}

export default App
