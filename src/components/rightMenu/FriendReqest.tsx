import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const FriendReqest = () => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4'>
        {/* TOP */}
        <div className='flex justify-between items-center font-medium'>
            <span className='text-gray-500'>Friend Requests</span>
            <Link href="/" className="text-blue-500 text-xs">See all</Link>
        </div>

        {/* USER1 */}
        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-4'>
                <Image
                    src="https://images.pexels.com/photos/21945949/pexels-photo-21945949/free-photo-of-a-woman-looking-out-the-window.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
                    alt=''
                    width={40}
                    height={40} 
                    className='w-10 h-10 rounded-full object-cover'
                />
                <span className='font-semibold'>Mitali Sawant</span> 
            </div>

            <div className='flex gap-3 flex-end'>
                <Image
                    src="/accept.png"
                    alt=''
                    width={20}
                    height={20}
                    className='cursor-pointer'
                />
                <Image
                    src="/reject.png"
                    alt=''
                    width={20}
                    height={20}
                    className='cursor-pointer'
                />
            </div>
        </div>
        {/* USER2 */}
        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-4'>
                <Image
                    src="https://images.pexels.com/photos/21945949/pexels-photo-21945949/free-photo-of-a-woman-looking-out-the-window.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
                    alt=''
                    width={40}
                    height={40} 
                    className='w-10 h-10 rounded-full object-cover'
                />
                <span className='font-semibold'>Mitali Sawant</span> 
            </div>

            <div className='flex gap-3 flex-end'>
                <Image
                    src="/accept.png"
                    alt=''
                    width={20}
                    height={20}
                    className='cursor-pointer'
                />
                <Image
                    src="/reject.png"
                    alt=''
                    width={20}
                    height={20}
                    className='cursor-pointer'
                />
            </div>
        </div>
        {/* USER3 */}
        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-4'>
                <Image
                    src="https://images.pexels.com/photos/21945949/pexels-photo-21945949/free-photo-of-a-woman-looking-out-the-window.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
                    alt=''
                    width={40}
                    height={40} 
                    className='w-10 h-10 rounded-full object-cover'
                />
                <span className='font-semibold'>Mitali Sawant</span> 
            </div>

            <div className='flex gap-3 flex-end'>
                <Image
                    src="/accept.png"
                    alt=''
                    width={20}
                    height={20}
                    className='cursor-pointer'
                />
                <Image
                    src="/reject.png"
                    alt=''
                    width={20}
                    height={20}
                    className='cursor-pointer'
                />
            </div>
        </div>
    </div>
  )
}

export default FriendReqest