"use client"
import React from 'react'
import { Button } from '../ui/button'
import { signOut, useSession } from 'next-auth/react'
import { getSelf } from '@/lib/auth-service'
import Image from 'next/image'

function UserButton() {
  const user = useSession()
  const image = user.data?.user.image
  const onClick = () => {
    signOut()
  }
  return (
    <div className='w-12 h-12 cursor-pointer rounded-full p-2 overflow-hidden' onClick={onClick}>
      <img className='object-cover w-full rounded-full' src={`${image}`} alt='User Avatar' />
    </div>
  )
}

export default UserButton