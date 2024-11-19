"use client";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter(); // Initialize router for navigation

  // Redirect to login page when "Start" is clicked
  const handleStart = () => {
    router.push("/login");
  };

  return (
    <div className="min-h-screen  bg-blue-900  flex flex-col justify-center items-center relative overflow-hidden">
    
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
        <div className="absolute top-32 right-12 w-96 h-96 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
        <div className="absolute bottom-32 left-16 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
      </div>


      <div className="bg-blue-950 backdrop-blur-xl shadow-xl p-20 rounded-lg">
        <div className="z-10 text-center text-white space-y-6">
          <h1 className="text-5xl font-extrabold tracking-tight mb-6 animate-fade-in-up">
            Welcome to ImageGate!
          </h1>
          <p className="text-lg font-light max-w-xl mx-auto animate-fade-in-up delay-200">
            Experience the best way to manage and explore high-quality images.
            Get started now!
          </p>

      
          <div className="mt-10">
            <button
              onClick={handleStart}
              className="px-8 py-4 bg-blue-600 text-white text-xl font-semibold rounded-full shadow-lg transform hover:scale-105 hover:bg-blue-700 transition-all duration-300 ease-in-out"
            >
              Start
            </button>
          </div>
        </div>
      </div>

      {/* Floating Shapes */}
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-br from-yellow-500 to-pink-500 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-floating delay-300"></div>
      <div className="absolute bottom-12 right-12 w-48 h-48 bg-gradient-to-tl from-indigo-500 to-purple-500 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-floating"></div>
    </div>
  );
}
