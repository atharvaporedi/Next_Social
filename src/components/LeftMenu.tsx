import Link from "next/link"
import ProfileCard from "./ProfileCard"
import Image from "next/image"
import Ad from "./Ad"

const LeftMenu = ({type}:{type:"home" | "profile"}) => {
  return (
    <div className="flex flex-col gap-6">
      {type === "home" && <ProfileCard/>}
      <div className="p-4 bg-white rounded-lg shadow-md text-sm text-gray-500 flex flex-col gap-2">
        <Link 
          href="/" 
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
        >
          <Image 
            src="/posts.png" 
            alt=""
            width={20}
            height={20}
          />
          <span className="">My Posts</span>
        </Link>
        <hr className="boder-t-1 boder-gray-50 w-36 self-center"/>
        <Link 
          href="/" 
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
        >
          <Image 
            src="/activity.png" 
            alt=""
            width={20}
            height={20}
          />
          <span className="">Activity</span>
        </Link>
        <hr className="boder-t-1 boder-gray-50 w-36 self-center"/>
        <Link 
          href="/" 
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
        >
          <Image 
            src="/market.png" 
            alt=""
            width={20}
            height={20}
          />
          <span className="">Marketplace</span>
        </Link>
        <hr className="boder-t-1 boder-gray-50 w-36 self-center"/>
        <Link 
          href="/" 
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
        >
          <Image 
            src="/events.png" 
            alt=""
            width={20}
            height={20}
          />
          <span className="">Events</span>
        </Link>
        <hr className="boder-t-1 boder-gray-50 w-36 self-center"/>
        <Link 
          href="/" 
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
        >
          <Image 
            src="/albums.png" 
            alt=""
            width={20}
            height={20}
          />
          <span className="">Albums</span>
        </Link>
        <hr className="boder-t-1 boder-gray-50 w-36 self-center"/>
        <Link 
          href="/" 
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
        >
          <Image 
            src="/videos.png" 
            alt=""
            width={20}
            height={20}
          />
          <span className="">Videos</span>
        </Link>
        <hr className="boder-t-1 boder-gray-50 w-36 self-center"/>
        <Link 
          href="/" 
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
        >
          <Image 
            src="/news.png" 
            alt=""
            width={20}
            height={20}
          />
          <span className="">News</span>
        </Link>
        <hr className="boder-t-1 boder-gray-50 w-36 self-center"/>
        <Link 
          href="/" 
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
        >
          <Image 
            src="/courses.png" 
            alt=""
            width={20}
            height={20}
          />
          <span className="">Courses</span>
        </Link>
        <hr className="boder-t-1 boder-gray-50 w-36 self-center"/>
        <Link 
          href="/" 
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
        >
          <Image 
            src="/lists.png" 
            alt=""
            width={20}
            height={20}
          />
          <span className="">Lists</span>
        </Link>
        <hr className="boder-t-1 boder-gray-50 w-36 self-center"/>
        <Link 
          href="/" 
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
        >
          <Image 
            src="/settings.png" 
            alt=""
            width={20}
            height={20}
          />
          <span className="">Settings</span>
        </Link>
      </div>
      <Ad size={"sm"}/>
    </div>
  )
}

export default LeftMenu