import { NextResponse } from "next/server";
import axios from "axios"; 

export async function POST(request) {
  const { email, password, firstName, lastName, phoneNumber } =
    await request.json();

  try {
   
    const response = await axios.post(
      "https://image-gate-be.vercel.app/signup",
      {
        email,
        password,
        firstName,
        lastName,
        phoneNumber,
      }
    );

  
    return NextResponse.json(
      { message: "User created successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error(
      "Error creating user:",
      error.response ? error.response.data : error.message
    );


    return NextResponse.json(
      {
        message: "Error creating user",
        error: error.response ? error.response.data : error.message,
      },
      { status: 500 }
    );
  }
}
