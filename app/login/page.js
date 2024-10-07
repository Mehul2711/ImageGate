"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://imagegatebe.onrender.com/login",
        {
          email,
          password,
        }
      );

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify({ fullName: data.fullName }));
      router.push("/homepage");
    } catch (error) {
      console.error("Error logging in:", error);
      alert("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Section */}
      <div className="hidden md:flex w-1/2  bg-blue-900 justify-center items-center">
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Welcome to ImageGate</h2>
          <p className="mb-6">
            Experience the best way to manage and explore high-quality images.
          </p>
          <div className="flex flex-col items-center space-y-4">
            <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold">New Images Uploaded</h3>
              <p className="text-xl">16,048 in the last 24 hours</p>
            </div>
            <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold">New Users Joined</h3>
              <p className="text-xl">1,200 in the last 24 hours</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 bg-white">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold text-blue-800 text-center mb-6">
            Welcome back!
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md text-gray-900 focus:ring-blue-800 focus:border-blue-800"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="relative">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md text-gray-900 focus:ring-blue-800 focus:border-blue-800"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span
                className="absolute inset-y-0 mt-1 right-3 flex items-center cursor-pointer text-blue-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </span>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-800 text-white py-2 px-4 rounded-md font-semibold hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-800"
            >
              Log in
            </button>

            {/* <div className="text-center">
              <a href="#" className="text-blue-800 hover:underline">
                Forgot password?
              </a>
            </div> */}
          </form>

          <div className="flex items-center justify-center mt-6">
            <span className="h-px w-full bg-gray-300"></span>
            <span className="px-3 text-gray-500">OR</span>
            <span className="h-px w-full bg-gray-300"></span>
          </div>

          <div className="text-center mt-6">
            <p className="text-gray-600">
              Don’t have an account?{" "}
              <a href="/signup" className="text-blue-800 hover:underline">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
