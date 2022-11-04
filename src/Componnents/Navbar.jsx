import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between p-4 absolute w-full bg-black' > 
        <div className='text-red-600 text-3xl cursor-pointer font-bold uppercase'>Netflix</div>
        <div>
            <button className='text-white mr-4'>Sign In</button> 
            <button className='bg-red-600 text-white px-6 py-2 cursor-pointer rounded'>Sign Up</button>
        </div>
    </div>
  )
}

export default Navbar