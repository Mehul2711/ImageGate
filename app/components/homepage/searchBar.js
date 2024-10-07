"use client";
export default function searchBar({ searchTerm, setSearchTerm, handleSearch }) {
  return (
    <form onSubmit={handleSearch} className="flex justify-center mb-10">
      <input
        type="text"
        placeholder="Search stunning photos..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="px-6 py-3 border-none rounded-l-full text-lg w-2/3 md:w-1/2 shadow-lg focus:outline-none focus:ring-4 focus:ring-indigo-500 bg-white"
      />
      <button
        type="submit"
        className="px-6 py-3 bg-indigo-600 text-white rounded-r-full hover:bg-indigo-700 shadow-lg focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Search
      </button>
    </form>
  );
}
