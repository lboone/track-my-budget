'use server';
import { connectMongoDb } from "@/config/db-connection";
import { currentUser } from "@clerk/nextjs/server";
import UserModel from "@/app/models/user-model";
connectMongoDb();

export const GetLoggedInUserFromMongoDB = async () => {
    try {
        const clerkUser = await currentUser();

        //Check to see if user exists in MongoDB
        const user = await UserModel.findOne({ clerkUserId: clerkUser?.id });
        if(user){
            return JSON.parse(JSON.stringify(user));
        }

        //If user doesn't exist, create a new one
        const newUser  = await UserModel.create({
            name: `${clerkUser?.firstName} ${clerkUser?.lastName}`,
            email: clerkUser?.emailAddresses[0]?.emailAddress,
            username: clerkUser?.username,
            clerkUserId: clerkUser?.id,
        });
        return JSON.parse(JSON.stringify(newUser));
    } catch (error: any) {
        return {
            error: error.message, 
        }
    }
}