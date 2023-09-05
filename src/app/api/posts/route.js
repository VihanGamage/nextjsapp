import {NextResponse} from "next/server";
import connect from "@/utils/db";
import Post from "@/models/Post";
//import User from "@/models/User";

export const GET = async (request) => {
    try {
        await connect;
        const posts=await Post.find();
        return new NextResponse(JSON.stringify(posts), {status:200});
    }catch (err){
        return new NextResponse("error", {status:500});
    }
}