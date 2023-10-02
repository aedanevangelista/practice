import React from 'react'

const Register = () => {
  return (
<main className=' border max-w-5xl mx-auto min-h-screen grid content-center '>
        
        <div className='border rounded-3xl mx-64 px-14 py-24 grid content-center shadow-xl'>

            <header className='my-6 flex flex-col justify-center items-center text-gray-600'>            
                <h1 className='my-2 font-semibold text-4xl'>Welcome!</h1>
                <h2 className=''>Create your account</h2>
            </header>

            <label htmlFor="sa id ng input" className='flex justify-center mb-4'>
                    <button className='shadow-md shadow-cyan-600/20 rounded-full'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#1bb5f7" class="w-24 h-24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </button>
            </label>

            <div className='flex items-center my-4'>



                <span className='shadow-md shadow-cyan-600/20 border rounded-full bg-white p-5 absolute'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#1bb5f7" class="w-8 h-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                </svg>

                </span>

                <input type="text" placeholder='Full name' className='shadow-md shadow-cyan-600/20 pl-24 py-4 border grow rounded-full'/>

            </div>

            <div className='flex items-center my-4'>

                <span className='shadow-md shadow-cyan-600/20 border rounded-full bg-white p-5 absolute'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#1bb5f7" class="w-8 h-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                </span>

                <input type="Email" placeholder='Email' className='shadow-md shadow-cyan-600/20 pl-24 py-4 border grow rounded-full'/>
            </div>
            
            <div className='flex items-center my-4'>
                <span className='shadow-md shadow-cyan-600/20 border rounded-full bg-white p-5 absolute'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#1bb5f7" class="w-8 h-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                </span>

                <input type="Password" placeholder='Password' className='shadow-md shadow-cyan-600/20 pl-24 py-4 border grow rounded-full'/>
            </div>
        
            <div className='flex items-center my-4'>
                <span className='shadow-md shadow-cyan-600/20 border rounded-full bg-white p-5 absolute'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#1bb5f7" class="w-8 h-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>

                </span>

                <input type="Password" placeholder='Confirm Password' className='shadow-md shadow-cyan-600/20 pl-24 py-4 border grow rounded-full'/>
            </div>

            <button className='hover:bg-sky-500/80 ease-in-out duration-300 my-4 shadow-md shadow-cyan-600/20 border rounded-full font-semibold mx-auto bg-sky-500 px-3 py-3 text-white text-sm w-1/3'>Sign In</button>

            <hr className='my-6'/>

            <span className='flex flex-col justify-center lg:flex-row items-center'>
                <section className='text-gray-500'>Already a user?</section>
                <section className='text-sky-500 mx-2'><a href="">Sign in here</a></section>
            </span>
        </div>

    </main> 
  )
}

export default Register