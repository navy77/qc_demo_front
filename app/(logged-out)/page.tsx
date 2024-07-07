import { Button } from '@/components/ui/button'
import React from 'react'
import { RulerIcon } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'


export default function LanndingPage() {
  return (
    <>
        <h1 className='flex gap-2 items-center'>
            <RulerIcon size={60} className='text-blue-700'/>
            Measurement System
        </h1>
        <p>Measurement system with IIOT</p>
        <div className='flex gap-2 items-center'>
        <Button asChild >
            <Link href="/login">Log in</Link>
        </Button>
        <small>or</small>
        <Button asChild variant='outline'>
            <Link href="/sign-up">Sign up</Link>
            </Button>
        </div>   

    </>
  )
}
