import React from 'react'
import { PrivatePageLayoutProvider } from '@/providers'

const Profile = () => {
  return (
    <PrivatePageLayoutProvider>
      Profile Page
    </PrivatePageLayoutProvider>
  )
}

export default Profile