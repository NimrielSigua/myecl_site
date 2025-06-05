import connectMongoDB from '@/libs/mongodb';
import Users from '@/models/users';
import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const { fname, mname, lname, age, gender, role, address, username, password } = await request.json();
        await connectMongoDB();
        await Users.create({ fname, mname, lname, age, gender, role, address, username, password });
        return NextResponse.json({ message: "Successfully signed up" }, { status: 201 });
    } catch (error) {
        console.error("Error signing up user:", error);
        return NextResponse.json({ message: "Error signing up user: ", error: error.message }, { status: 500 });
    }
}

export async function GET(request) {
    try {
        await connectMongoDB();
        const url = new URL(request.url);
        const username = url.searchParams.get("username");

        if (username) {
            // Check if a user with the given username exists
            const user = await Users.findOne({ username });
            return NextResponse.json({ users: user ? [user] : [] });
        }

        // If no username is provided, return all users
        const users = await Users.find();
        return NextResponse.json({ users });
    } catch (error) {
        console.error("Error fetching users:", error);
        return NextResponse.json({ message: "Error fetching users", error: error.message }, { status: 500 });
    }
}

export async function DELETE(request) {
    try {
        const url = request.nextUrl;
        const id = url.searchParams.get("id");
        await connectMongoDB();
        await Users.findByIdAndDelete(id);
        return NextResponse.json({ message: "User successfully deleted" }, { status: 200 });
    } catch (error) {
        console.error("Error deleting user:", error);
        return NextResponse.json({ message: "Error deleting user", error: error.message }, { status: 500 });
    }
}

