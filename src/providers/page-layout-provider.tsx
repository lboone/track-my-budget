import React from 'react'
import LayoutProvider from './layout-provider'

const PageLayoutProvider = ({children} : {children: React.ReactNode}) => {
  return (
    <LayoutProvider>
      <div className="p-5">{children}</div>
    </LayoutProvider>
  )
}

export default PageLayoutProvider