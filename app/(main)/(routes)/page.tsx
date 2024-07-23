import React from 'react'
import { ModeToggle } from '@/components/mode-toggle'
import { UserButton } from '@clerk/nextjs'

const Home = () => {
   return (
      <div>
         <UserButton />
         <ModeToggle />
      </div>
   )
}

export default Home
