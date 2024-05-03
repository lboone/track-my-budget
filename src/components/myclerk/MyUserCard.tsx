import { MyUserButton } from "@/components/myclerk";
import { GetLoggedInUserFromMongoDB } from "@/server-actions/users";

const MyUserCard = async ({...props}) => { 
  const user = await GetLoggedInUserFromMongoDB();
  return (
    <div className="flex flex-col gap-2">
      <MyUserButton />
      <span>Name: {user?.name}</span>
      <span>Username: {user?.username}</span>
      <span>Email: {user?.email}</span>
      <span>Clerk User ID: {user?.clerkUserId}</span>
    </div>
  );
};

export default MyUserCard;
