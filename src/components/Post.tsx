import Image from "next/image"

const Post = () => {
  return (
    <div className="flex flex-col gap-4">
        {/*USER*/}
        <div className="flex items-center justigy-between">
            <div className="flex item-center gap-4">
                <Image src="/git.jpg" width={40} height={40} alt="" className="w-10 h-10 rounded-full"/>
                <span className="font-medium">Atharva Poredi</span>
            </div>
            <Image src="/more.png" width={16} height={16} alt=""/>
        </div>
        {/*DESC*/}
        <div className="flex flex-col gap-4">
            <div className="w-full min-h-96 relative">
                <Image src="https://images.pexels.com/photos/26595636/pexels-photo-26595636/free-photo-of-temple.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" fill className="object-cover rounded-md" alt=""/>
            </div>   
            <p>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. 
                Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like) 
            </p>
        </div>
        {/*INTERAction*/}
        <div className="flex items-center justify-between text-sm mt-4">
            <div className="flex gap-8">
                <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                    <Image 
                        src="/like.png" 
                        width={16} 
                        height={16} 
                        alt="Likes" 
                        className="cursor-pointer"
                    />
                    <span className="text-gray-300">|</span>
                    <span className="text-gray-500">500 <span className="hidden md:inline"> Likes</span> </span>
                </div>
                <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                    <Image 
                        src="/comment.png" 
                        width={16} 
                        height={16}
                        alt="" 
                        className="cursor-pointer" 
                        />
                    <span className="text-gray-300">|</span>
                    <span className="text-gray-500">500 <span className="hidden md:inline"> Comments</span> </span>
                </div>
            </div>
            <div className="">
                <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                    <Image 
                        src="/share.png" 
                        width={16} 
                        height={16} 
                        alt=""
                        className="cursor-pointer"
                    />
                    <span className="text-gray-300">|</span>
                    <span className="text-gray-500">500 <span className="hidden md:inline"> Shares</span> </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post