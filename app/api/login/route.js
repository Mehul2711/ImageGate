import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../../../../backend/models/user"; // Assuming you have your User model here
import dbConnect from "../../../lib/dbConnect"; // Utility function to connect to MongoDB

export async function POST(request) {
  const { email, password } = await request.json();

  await dbConnect(); // Connect to the database

  // Find the user by email
  const user = await User.findOne({ email });
  if (!user) {
    return NextResponse.json(
      { message: "Invalid credentials" },
      { status: 400 }
    );
  }

  // Check if the password matches
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return NextResponse.json(
      { message: "Invalid credentials" },
      { status: 400 }
    );
  }

  // Generate a JWT token
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  return NextResponse.json({ token }, { status: 200 });
}
