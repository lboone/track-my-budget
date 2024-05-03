import { MyUserCard } from '@/components/myclerk';
import { GetLoggedInUserFromMongoDB } from "@/server-actions/users";
import  Link  from "next/link";

const Header = async () => {
    const currentUser  = await GetLoggedInUserFromMongoDB();
  return (
    <div className="p-5 bg-primary flex justify-between items-center">
        <div className="font-bold text-white text-3xl">
            <Link href="/" className="text-white no-underline">
                tmb.app
            </Link>
        </div>
        <div><MyUserCard loggedInUser={currentUser}/></div>
    </div>
    
  )
}

export default Header