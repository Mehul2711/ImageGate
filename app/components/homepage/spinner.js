"use client";
export default function Spinner() {
  return (
    <div className="flex justify-center items-center">
      <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 rounded-full text-indigo-600"></div>
      <p className="text-lg ml-4 text-white">Fetching beautiful photos...</p>
    </div>
  );
}
