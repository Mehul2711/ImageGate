import { NextResponse } from "next/server";
import axios from "axios"; // Use Axios to make requests to the backend

export async function POST(request) {
  const { email, password } = await request.json();

  try {
    const response = await axios.post(
      "https://imagegatebe.onrender.com/login",
      {
        email,
        password,
      }
    );

    // Extract token from the backend response
    const { token } = response.data;

    // Return the token to the frontend
    return NextResponse.json({ token }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Invalid credentials or server error" },
      { status: 400 }
    );
  }
}
