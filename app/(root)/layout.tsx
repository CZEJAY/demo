
import { Footer } from '@/components/shared/Footer'
import { Header } from '@/components/shared/Header'
import React, { PropsWithChildren } from 'react'

const RootLayout = ({children}:PropsWithChildren) => {
  return (
    <div>
        <Header />
        {children}
        <Footer />
    </div>
  )
}

export default RootLayout