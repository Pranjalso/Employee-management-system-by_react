import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className=' flex-shrink-0 h-full w-[300px] p-5 bg-yellow-400 rounded-xl'>
    <div className='flex justify-between items-center text-sm'>
     <h3 className='bg-red-600 px-3 py-1 rounded'>
{data.category}</h3>
<h4 className='text-sm'>{data.date}</h4>
    </div>
    <h2 className='mt-5 text-2xl font-semibol'>{data.title}</h2>
    <p className='text-sm mt-2'>{data.description}</p>
    <div className='mt-4'>
        <button>Accept Task</button>
    </div>
   </div>
  )
}

export default NewTask;
