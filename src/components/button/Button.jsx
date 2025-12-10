import React from 'react'

export default function Button({content}) {
  return (
    <button className='bg-linear-to-b from-orange-400 to-orange-500 px-8 py-2.5 font-semibold md:text-xl text-sm text-white rounded-lg hover:scale-105 hover:to-orange-600 transition-all duration-300 cursor-pointer'>
      {content}
    </button>
  )
}
