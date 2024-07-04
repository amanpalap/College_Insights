import React from 'react'

function Login() {
  const HandleSubmit = (e) => {
    e.preventDefault()
    console.log("Registered")
  }

  return (

      <div className="flex flex-wrap justify-center w-full max-w-md p-8 mt-10 text-white bg-black rounded-lg shadow-lg gap-y-4 bg-opacity-20">
        <h2 className="flex flex-wrap justify-center w-full text-2xl font-bold text-center text-white bg-black rounded-xl bg-opacity-40">Login</h2>
        <form className='flex flex-wrap items-center justify-center w-full gap-y-4' onSubmit={HandleSubmit}>
          <div className="w-full mb-4">
            <label htmlFor="email" className="block mb-2 text-white">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 bg-transparent border-b-2 rounded-lg focus:outline-none"
              placeholder="Enter your email"
            />
          </div>
          <div className="w-full mb-4">
            <label htmlFor="password" className="block mb-2 text-white">Password</label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 bg-transparent border-b-2 rounded-lg focus:outline-none"
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="w-1/3 py-2 text-sm font-extrabold bg-black rounded-xl bg-opacity-30">
            Login
          </button>
            
       </form>
       <h3 className='text-sm cursor-pointer'>Forgot Password</h3>  
      </div>

  )
}

export default Login
