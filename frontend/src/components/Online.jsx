import React from 'react'

import User from './User'

const Online = () => {
  return (
    <>
      <main className='min-h-screen max-w-5xl mx-auto flex justify-center items-center'>
        
        <div className='flex flex-col shadow-md shadow-cyan-600/20 border rounded-3xl w-1/2'>
          
          <header className='flex justify-between items-center p-4 border-b'>

            <div className='shadow-md shadow-cyan-600/20 sm:h-16 sm:w-16 h-12 w-12 border rounded-full'>
            
            </div>

              <div className=' flex flex-col items-center justify-center'>

                <h1 className='md:text-xl text-sm font-bold'>Aedan Evangelista</h1>
                <h3 className='font-semibold text-xs text-green-400'>Active</h3>

              </div>
              
              <button className='' id='logout'>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#1bb5f7" class="drop-shadow-md shadow-sky-800 md:w-10 md:h-10 w-8 h-8">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                </svg>

              </button>
            
          </header>
          
          <div className='flex flex-col overflow-auto h-96 scroll-smooth'>
            <User />
            <User />
            <User />
            <User />
            <User />
            <User />
            <User />
          </div>



        </div>
        
      
      </main>



    </>
  )
}

export default Online