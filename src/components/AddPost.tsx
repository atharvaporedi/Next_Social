import Image from 'next/image'

const AddPost = () => {
  return (
    <div className='p-4 bg-white rounded-lg flex gap-4 justify-between text-sm'>
      {/*AVTAR*/}
      <Image src="/git.jpg" 
      alt="" 
      width={48} 
      height={48} 
      className="w-12 h-12 object-cover rounded-full">
      </Image>
       {/*POST*/}
       <div className='flex-1'>
        {/*TEXT INPUT*/}
        <div className='flex gap-4'>
          <textarea placeholder="What's on your mind" className="flex-1 bg-slate-100 rounded-lg p-2"></textarea>
          <Image src="/emoji.png" 
          alt="" 
          width={20} 
          height={20}   
          className="w-5 h-5 cursor-pointer self-end"/>
          
        </div>
        {/*POST OPTIONS*/}
        <div className='flex item-center gap-4 mt-4 text-gray-400'>
          <div className='flex item-center gap-2 cursor-pointer'>
          <Image src="/addImage.png" alt="" width={20} height={20}/>
          Photo
          </div>
        </div>
       </div>
    </div>
  )
}

export default AddPost