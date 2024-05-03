import { MyUserButton } from "@/components/myclerk";

import UserType from "@/types/UserType";

const MyUserCard = async ({loggedInUser} : {loggedInUser?: UserType | null}) => { 
  if(!loggedInUser){
    return (
      <div className="flex flex-col gap-2">
        <MyUserButton />
      </div>
    )
  } else {
    return (
      <div className="flex flex-col gap-2">
        <MyUserButton />
        <span>Name: {loggedInUser?.name}</span>
        <span>Username: {loggedInUser?.username}</span>
        <span>Email: {loggedInUser?.email}</span>
        <span>Clerk User ID: {loggedInUser?.clerkUserId}</span>
      </div>
    );
  }

};

export default MyUserCard;
