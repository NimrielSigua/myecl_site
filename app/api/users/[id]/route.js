import connectMongoDB from "@/libs/mongodb";
import Users from "@/models/users";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
    try {
        const { id } = params;
        const { name, mname, lname, age, gender, role, address, username, password } = await request.json();

        await connectMongoDB();
        const updatedUser = await Users.findByIdAndUpdate(id, { name, mname, lname, age, gender, role, address, username, password }, { new: true });
        if (!updatedUser) {
            return NextResponse.json({ message: "Movie not found" }, { status: 404 });
        }
        return NextResponse.json({ message: "Movie updated", user: updatedUser }, { status: 200 });
    } catch (error) {
        console.error("Error updating movie:", error);
        return NextResponse.json({ message: "Error updating movie", error: error.message }, { status: 500 });
    }
}

export async function GET(request, { params}){
   try{
     const { id } = params;
    await connectMongoDB;
    const user = await Users.findOne({_id: id});
    return NextResponse.json({ user }, { status: 200 })
   }catch(error){
        console.error("Error retrieving data:", error)
        return NextResponse.json({ message: "Error retrieving data", error: error.message }, { status:500 })
   }
}