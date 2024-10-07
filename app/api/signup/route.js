import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import User from "../../../../backend/models/user"; // Assuming you have your User model here
import dbConnect from "../../../lib/dbConnect"; // Utility function to connect to MongoDB

export async function POST(request) {
  const { email, password, firstName, lastName, phoneNumber } =
    await request.json();

  await dbConnect();

  // Check if user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return NextResponse.json(
      { message: "User already exists with this email" },
      { status: 400 }
    );
  }

  // Hash the password before saving
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    // Create a new user with all fields
    const newUser = new User({
      email,
      password: hashedPassword,
      firstName,
      lastName,
      phoneNumber,
    });
    await newUser.save();

    return NextResponse.json(
      { message: "User created successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      { message: "Error creating user" },
      { status: 500 }
    );
  }
}
