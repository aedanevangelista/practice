import React from 'react'

import Incoming from './Incoming'
import Outcoming from './Outcoming'

const Chat = () => {
  return (
    <>
        <main className='min-h-screen max-w-5xl mx-auto flex justify-center items-center'>
        
        <div className='flex flex-col shadow-md shadow-cyan-600/20 border rounded-3xl w-1/2'>
          
          <header className='flex justify-between items-center p-4 border-b'>

            <div className='shadow-md shadow-cyan-600/20 sm:h-16 sm:w-16 h-12 w-12 border rounded-full'>
            
            </div>

              <div className=' flex flex-col items-center justify-center'>

                <h1 className='md:text-xl text-sm font-bold'>Chat Friend</h1>
                <h3 className='font-semibold text-xs text-green-400'>Active</h3>

              </div>
              
              <button className='' id='logout'>

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#1bb5f7" class="drop-shadow-md shadow-sky-800 md:w-8 md:h-8 w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
              </svg>


              </button>
            
          </header>
          
          <div className='flex flex-col overflow-auto h-96 scroll-smooth m-2 border rounded-xl'>
            <Incoming />
            <Outcoming />
          </div>

          <div className='flex justify-between items-center'>
            <textarea className=" p-4 mx-2 my-2 rounded-2xl h-16 w-4/5 border bg-gray-300/20 resize-none" placeholder='Aa' name="" id="" cols="30" rows="10"></textarea>
            
            <button className='rounded-xl border shadow-md shadow-cyan-600/20 mr-6 mb-1 p-2 '>

              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1bb5f7" class="sm:w-8 sm:h-8 h-6 w-6">
              <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
              </svg>

            </button>
          </div>



        </div>
        
      
      </main>
    </>
  )
}

export default Chat