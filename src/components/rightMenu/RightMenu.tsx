import { User } from "@prisma/client";
import Ad from "../Ad";
import Birthday from "./Birthday";
import FriendReqest from "./FriendReqest";
import UserMediaCard from "./UserMediaCard";
import UserinfoCard from "./UserinfoCard";
import { Suspense } from "react";

const RightMenu = ({ user }:{ user?: User }) => {
  return <div className="flex flex-col gap-6">
    {user ? (
      <>
      <Suspense fallback = "loading...">
        <UserinfoCard user = {user}/>
      </Suspense>
      <Suspense fallback = "loading...">
        <UserMediaCard user = {user}/>
      </Suspense>
        
      </>
    ) : null}
    <FriendReqest />
    <Birthday />
    <Ad size="md" />
    </div>;
};

export default RightMenu