import { connectDB } from "@/lib/db";
import { Note } from "@/lib/models/Note";

export async function DELETE(request,{params}){
    await connectDB();
    const {id}=await params;
    await Note.findByIdAndDelete(id);

    return Response.json({message:'Deleted'})
}

export async function PUT(request,{params}){
    await connectDB();
    const {id}=await params;
    const {title,content}=await request.json();
    const note=await Note.findByIdAndUpdate(id,{title,content},{returnDocument:"after"});
    return Response.json(note);
}