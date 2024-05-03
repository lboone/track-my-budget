import { MyUserButton } from "@/components/myclerk";
import { currentUser } from "@clerk/nextjs/server";

const MyUserCard = async () => {
  const user = await currentUser();
  const wholeName = `${user?.firstName} ${user?.lastName}`;
  const email = user?.emailAddresses[0]?.emailAddress;
  const userName = user?.username;
  const clerkUserId = user?.id;
  return (
    <div className="flex flex-col gap-2">
      <MyUserButton />
      <span>Name: {wholeName}</span>
      <span>Username: {userName}</span>
      <span>Email: {email}</span>
      <span>Clerk User ID: {clerkUserId}</span>
    </div>
  );
};

export default MyUserCard;
