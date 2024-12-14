import CreateForm from '@/components/Create-form'
import React from 'react'

const CreatPage = () => {
  return (
    <div className='min-h-screen flex justify-center items-center'>
      <div className='rounded-sm bg-slate-100 p-8'>
        <h1 className='text-3xl'>
          Uploading Image
        </h1>
        <CreateForm />
      </div>
    </div>
  )
}

export default CreatPage
