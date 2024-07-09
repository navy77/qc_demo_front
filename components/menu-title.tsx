import React from 'react'
import Image from 'next/image'
import Logo from '@/public/image/nmb.png'
export default function MenuTitle() {
  return (

    
    // <h4 className='flex justify-center'>
    //      MinebeaMitsumi
    // </h4>
      <div className='flex items-center justify-center'>
        <Image src={Logo} alt="Logo" width={200} height={80} />
      </div>
      

  )
}
