import InfoSection from "../components/signup/infoSection";
import SignupForm from "../components/signup/form";

export default function MainSignup() {
  return (
    <div className="relative min-h-screen bg-blue-900 flex justify-center items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
        <div className="absolute top-32 right-12 w-96 h-96 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
        <div className="absolute bottom-32 left-16 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
      </div>

      {/* Main Signup Content */}
      <div className="relative z-10 w-full max-w-4xl flex bg-white shadow-lg rounded-lg overflow-hidden">
        <InfoSection />
        <SignupForm />
      </div>

      {/* Floating Shapes */}
      {/* <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-br from-yellow-500 to-pink-500 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-floating delay-300 z-0"></div>
      <div className="absolute bottom-12 right-12 w-48 h-48 bg-gradient-to-tl from-indigo-500 to-purple-500 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-floating z-0"></div> */}
    </div>
  );
}
