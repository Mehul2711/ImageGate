import { NextResponse } from "next/server";
import axios from "axios"; 

export async function POST(request) {
  const { email, password } = await request.json();

  try {
    const response = await axios.post(
      "https://image-gate-be.vercel.app/login",
      {
        email,
        password,
      }
    );

    const { token } = response.data;


    return NextResponse.json({ token }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Invalid credentials or server error" },
      { status: 400 }
    );
  }
}
