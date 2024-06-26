import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const UserinfoCard = ({ userId } : { userId : string}) => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4'>
        {/* TOP */}
        <div className='flex justify-between items-center font-medium'>
            <span className='text-gray-500'>User Information</span>
            <Link href="/" className="text-blue-500 text-xs">See all</Link>
        </div>
        {/* BOTTOM */}
        <div className='flex flex-col gap-4 text-gray-500'>
            <div className='flex items-center gap-2'>
                <span className='text-xl text-black'>Atharva Poredi</span>
                <span className='text-sm'>@atharva</span>
            </div>
            <p>
                lkjasfjasfjsfjkjksfasfkjasjkdf
                kasjfkjasfjasfkjasflkajsflkjlaskf
            </p>
            <div className='flex items-center gap-2'>
                <Image 
                src='/map.png'
                alt=''
                width={16}
                height={16}
                />
                <span>Living in <b>Navi Mumbai</b></span>
            </div>
            <div className='flex items-center gap-2'>
                <Image 
                src='/school.png'
                alt=''
                width={16}
                height={16}
                />
                <span>Went to <b>S.I.E.S COMS</b></span>
            </div>
            <div className='flex items-center gap-2'>
                <Image 
                src='/work.png'
                alt=''
                width={16}
                height={16}
                />
                <span>Working at <b>Apple Inc.</b></span>
            </div>
            <div className='flex items-center justify-between'>
                <div className='flex gap-1 items-center'>
                    <Image 
                    src='/link.png'
                    alt=''
                    width={16}
                    height={16}
                    />
                    <Link href="https://www.youtube.com/channel/UCFalWW4vEZvq_f_9J2zdw2g" className='text-blue-500 font-medium'>YT channel</Link>
                </div>
                <div className='flex gap-1 items-center'>
                    <Image 
                    src='/date.png'
                    alt=''
                    width={16}
                    height={16}
                    />
                    <span>Joined August 2025</span>
                </div>
            </div>
            <button className='bg-blue-500 text-white text-sm rounded-md p-2'>Follow</button>
            <span className='text-red-400 self-end text-xs cursor-pointer'>Block User</span>
        </div>
    </div>
  )
}

export default UserinfoCard