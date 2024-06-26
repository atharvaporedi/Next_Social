import Ad from "./Ad";
import Birthday from "./Birthday";
import FriendReqest from "./FriendReqest";

const RightMenu = ({userId}:{userId?: string}) => {
  return <div className="flex flex-col gap-6">
      <FriendReqest />
      <Birthday />
      <Ad size="md" />
    </div>;
};

export default RightMenu