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

// export async function DELETE(request) {
//     try {
//         const {id, name} = await request.json();
//         const query = {
//             [id]: id,
//         };
//
//         //const id =  request.nextUrl.searchParams.get("id");
//         await connect;
//         await Post.deleteOne(query)
//         //return new NextResponse(JSON.stringify(post),{status:200});
//         return new Response("employee deleted", { status: 200, headers: { 'Content-Type': 'application/json' } });
//     }catch (error){
//         return new Response(error, { status: 500 });
//     }
// }
