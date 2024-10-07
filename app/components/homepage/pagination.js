"use client";
export default function Pagination({
  page,
  handleNextPage,
  handlePrevPage,
  totalResults,
}) {
  return (
    <div className="flex justify-center items-center mt-8 space-x-4">
      <button
        onClick={handlePrevPage}
        className={`px-4 py-2 md:px-6 md:py-3 text-white rounded-full shadow-lg transform transition-all duration-300 ease-in-out ${
          page === 1
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700 hover:scale-105"
        }`}
        disabled={page === 1}
      >
        &larr;
      </button>

      <span className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 text-xl font-semibold text-blue-600 bg-white border-2 border-blue-600 rounded-full shadow">
        {page}
      </span>

      <button
        onClick={handleNextPage}
        className={`px-4 py-2 md:px-6 md:py-3 text-white rounded-full shadow-lg transform transition-all duration-300 ease-in-out ${
          page * 10 >= totalResults
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700 hover:scale-105"
        }`}
        disabled={page * 10 >= totalResults}
      >
        &rarr;
      </button>
    </div>
  );
}
