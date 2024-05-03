import Header from '@/app/_components/Header'
import React from 'react'

const LayoutProvider = ({children} : {children: React.ReactNode}) => {
  return (
    <div>
        <Header />
        <div >
            {children}
        </div>
    </div>
  )
}

export default LayoutProvider