import AddPost from "@/components/AddPost"
import Feed from "@/components/feed/Feed"
import LeftMenu from "@/components/leftMenu/LeftMenu"
import RightMenu from "@/components/rightMenu/RightMenu"
import Stories from "@/components/Stories"
import ProfileCard from "@/components/leftMenu/ProfileCard"
import ProfilePage from "./profile/[username]/page"

const Homepage = () => {
  return (
    <div className='flex gap-6 justify-center'>
      <div className="hidden xl:block w-[20%]"><LeftMenu type="home"/></div>
      <div className="w-full lg:w-[70%]">
        <div className="flex flex-col gap-6">
          <Stories/>
          <AddPost/>
          <Feed/>
        </div>
      </div>
      <div className="hidden lg:block w-[30%] "><RightMenu/></div>
    </div>
  )
}

export default Homepage