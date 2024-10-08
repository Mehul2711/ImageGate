import { NextResponse } from "next/server";
import axios from "axios"; // Use Axios to make HTTP requests to the backend

export async function POST(request) {
  const { email, password, firstName, lastName, phoneNumber } =
    await request.json();

  try {
    // Make a POST request to your backend's signup API
    const response = await axios.post(
      "https://imagegatebe.onrender.com/signup",
      {
        email,
        password,
        firstName,
        lastName,
        phoneNumber,
      }
    );

    // Return a success response if user creation is successful
    return NextResponse.json(
      { message: "User created successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error(
      "Error creating user:",
      error.response ? error.response.data : error.message
    );

    // Return an error response if something goes wrong
    return NextResponse.json(
      {
        message: "Error creating user",
        error: error.response ? error.response.data : error.message,
      },
      { status: 500 }
    );
  }
}
