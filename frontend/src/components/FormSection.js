import React from 'react'

const FormSection = ({children}) => {
  return (
    <div className='mx-auto max-w-7xl md:px-10'>
      <div className='mx-auto w-full md:w-1/2 mt-[25px]' >
        {children}        
      </div>
    </div>
  )
}

export default FormSection
