import Ad from "./Ad";
import Birthday from "./Birthday";
import FriendReqest from "./FriendReqest";
import UserMediaCard from "./UserMediaCard";
import UserinfoCard from "./UserinfoCard";

const RightMenu = ({ userId }:{ userId?: string }) => {
  return <div className="flex flex-col gap-6">
    {userId ? (
      <>
        <UserinfoCard userId = {userId}/>
        <UserMediaCard userId = {userId}/>
      </>
    ) : null}
    <FriendReqest />
    <Birthday />
    <Ad size="md" />
    </div>;
};

export default RightMenu