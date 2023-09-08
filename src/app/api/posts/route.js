import {NextResponse} from "next/server";
import connect from "@/utils/db";
import Post from "@/models/Post";

export async function GET() {
    await connect;
    const posts = await Post.find()
    return new NextResponse(JSON.stringify(posts), {status: 200});
}

export async function POST(request){
    const {id,name} = await request.json();
    await connect;
    await Post.create({id,name});
    return NextResponse.json({message:"created"},{status:201});
}

