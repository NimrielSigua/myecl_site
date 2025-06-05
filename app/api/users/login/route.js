import connectMongoDB from '@/libs/mongodb';
import Users from '@/models/users';
import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const { username, password } = await request.json();
        await connectMongoDB();

        // Find the user by username
        const user = await Users.findOne({ username });
        if (!user) {
            return NextResponse.json({ message: "User not found" }, { status: 404 });
        }

        // Compare the provided password with the stored password
        if (user.password !== password) {
            return NextResponse.json({ message: "Invalid password" }, { status: 401 });
        }

        // If the credentials are valid, return a success message and the user's role
        return NextResponse.json({ message: "Login successful", role: user.role }, { status: 200 });
    } catch (error) {
        console.error("Error logging in user:", error);
        return NextResponse.json({ message: "Error logging in user", error: error.message }, { status: 500 });
    }
}
