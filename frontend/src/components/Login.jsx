import React from 'react'

const Login = () => {
  return (
    <main className='  max-w-5xl mx-auto min-h-screen grid content-center '>
        
        <div className='border rounded-3xl mx-64 px-14 py-24 grid content-center shadow-xl'>

            <header className='my-6 flex flex-col justify-center items-center text-gray-600'>
            
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#1bb5f7" class="w-32 h-32 drop-shadow-lg">
            <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
            </svg>

                <h1 className='my-2 font-semibold text-4xl'>Welcome back!</h1>
                <h2 className='mb-4'>Login to your account</h2>
            </header>

            <div className='flex items-center my-4'>

                <span className='shadow-md shadow-cyan-600/20 border rounded-full bg-white p-5 absolute'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#1bb5f7" class="w-8 h-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                </span>

                <input type="Email" placeholder='Email' className='shadow-md shadow-cyan-600/20 pl-24 py-4 my-3 border grow rounded-full'/>
            </div>
            
            <div className='flex items-center'>
                <span className='shadow-md shadow-cyan-600/20 border rounded-full bg-white p-5 absolute'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#1bb5f7" class="w-8 h-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>

                </span>

                <input type="Password" placeholder='Password' className='shadow-md shadow-cyan-600/20 pl-24 py-4 my-3 border grow rounded-full'/>
            </div>
        
            <button className='hover:bg-sky-500/80 ease-in-out duration-300 my-4 shadow-md shadow-cyan-600/20 border rounded-full font-semibold mx-auto bg-sky-500 px-3 py-3 text-white text-sm w-1/3'>Sign In</button>

            <hr className='my-6'/>

            <span className='flex flex-col justify-center lg:flex-row items-center'>
                <section className='text-gray-500'>Don't have an account yet?</section>
                <section className='text-sky-500 mx-2'><a href="">Sign up here</a></section>
            </span>
        </div>

    </main>
  )
}

export default Login