import React from 'react'

const PageLayoutProvider = ({children} : {children: React.ReactNode}) => {
  return (
    <div className="p-5">{children}</div>
  )
}

export default PageLayoutProvider