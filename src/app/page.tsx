import { MyUserCard } from '@/components/myclerk';
import { GetLoggedInUserFromMongoDB } from "@/server-actions/users";

export default async function Home() {
  const user  = await GetLoggedInUserFromMongoDB();
  return (
    <div><MyUserCard loggedInUser={user}/></div>
  );
}
