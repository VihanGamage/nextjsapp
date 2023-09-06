// import connect from "@/utils/db";
// import Post from "@/models/Post";
// import {NextResponse} from "next/server";
//
// export const POST = async (request) => {
//     try {
//         await connect;
//         const posts=JSON.parse(request.body)
//         const newPost = new Post(posts);
//         await newPost.save();
//         return new NextResponse(JSON.stringify(newPost),{status:201});
//     }catch (err){
//         return new NextResponse("Error",{status:500});
//     }
// };