import Feed from "@/components/Feed"
import LeftMenu from "@/components/LeftMenu"
import RightMenu from "@/components/RightMenu"
import Image from "next/image"


const ProfilePage = () => {
    return (
    <div className='flex gap-6 justify-center'>
        <div className="hidden xl:block w-[20%]">
          <LeftMenu type="profile"/>
        </div>
        <div className="w-full lg:w-[70%]">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col items-center justify-center">
              <div className="w-full h-64 relative">
                <Image 
                  src="https://images.pexels.com/photos/26614294/pexels-photo-26614294/free-photo-of-swans-on-the-frozen-lake.png?auto=compress&cs=tinysrgb&w=600&lazy=load" 
                  alt=""
                  fill
                  className="object-cover rounded-md"
                />
                <Image 
                  src="https://images.pexels.com/photos/20852624/pexels-photo-20852624/free-photo-of-woman-with-bottles-in-village.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
                  alt=""
                  width={128}
                  height={128}
                  className="w-32 h-32 rounded-full left-0 right-0 m-auto absolute -bottom-16 ring-4 ring-white object-cover"
                />
              </div>
              <h1 className="mt-20 mb-4 text-2xl font-medium">Wau Hek</h1>
              <div className="flex items-center justify-center gap-12 mb-4">
                <div className="flex flex-col items-center">
                  <span className="font-medium">124</span>
                  <span className="text-sm">Posts</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-medium">12.1k</span>
                  <span className="text-sm">Followers</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-medium">1240</span>
                  <span className="text-sm">Following</span>
                </div>
              </div>
            </div>
            <Feed/>
          </div>
        </div>
      <div className="hidden lg:block w-[30%]">
        <RightMenu userId="test"/>
      </div>
    </div>
    )
  }
  
  export default ProfilePage
