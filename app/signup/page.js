import InfoSection from "../components/signup/infoSection";
import SignupForm from "../components/signup/form";

export default function MainSignup() {
  return (
    <div className="relative min-h-screen bg-blue-900 flex justify-center items-center">
     
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
        <div className="absolute top-32 right-12 w-96 h-96 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
        <div className="absolute bottom-32 left-16 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
      </div>

     
      <div className="relative z-10 w-full max-w-4xl flex bg-white shadow-lg rounded-lg overflow-hidden">
        <InfoSection />
        <SignupForm />
      </div>

     
    </div>
  );
}
