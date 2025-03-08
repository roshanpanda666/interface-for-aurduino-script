import React from 'react'
import Link from "next/link";
const Page = () => {
  return (
    <div >
      <div className='flex justify-center items-center h-screen'>
        <Link href={'/add-data'}>
        <button className='border-2 border-cyan-400'>control the board</button>
        </Link>
        
      </div>
      
    </div>
  )
}

export default Page
