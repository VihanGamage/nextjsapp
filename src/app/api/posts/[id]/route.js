import {NextResponse} from "next/server";
import connect from "@/utils/db";
import Post from "@/models/Post";

export const DELETE = async (request, { params }) => {
    try {
        await connect;
        await Post.findOneAndRemove(params);
        return new Response("Prompt deleted successfully", { status: 200 });
    } catch (error) {
        return new Response(error, { status: 500 });
    }
};

export async function PUT(request, { params }) {
    try {
        await connect;
        const {id,name} = await request.json();
        const updatedEmployee = {id,name};
        await Post.findOneAndUpdate(params,updatedEmployee)
        return new Response("success",{status:200});
    }catch (error){
        return new Response(error,{status:500});
    }
}