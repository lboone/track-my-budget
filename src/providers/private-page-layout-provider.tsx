import React from 'react'
import { PageLayoutProvider } from '@/providers';
import { SignedOut,RedirectToSignUp } from '@clerk/nextjs';

const PrivatePageLayoutProvider = ({children} : {children: React.ReactNode}) => {
  return (
    <PageLayoutProvider>
        <SignedOut>
            <RedirectToSignUp />
        </SignedOut>
        {children}
    </PageLayoutProvider>
  )
}

export default PrivatePageLayoutProvider;