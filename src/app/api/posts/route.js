import {NextResponse} from "next/server";
import connect from "@/utils/db";
import Post from "@/models/Post";

export const GET = async (request) => {
    try {
        await connect;
        const posts=await Post.find();
        return new NextResponse(JSON.stringify(posts), {status:200});
    }catch (err){
        return new NextResponse("error", {status:500});
    }
}

export async function POST(request){
    const {id,name} = await request.json();
    await connect;
    await Post.create({id,name});
    return NextResponse.json({message:"created"},{status:201});
}

// export async function DELETE(request) {
//     const id = request.nextUrl.searchParams.get("id");
//     await connectMongoDB();
//     await Topic.findByIdAndDelete(id);
//     return NextResponse.json({ message: "Topic deleted" }, { status: 200 });
// }

