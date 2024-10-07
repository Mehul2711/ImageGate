"use client";

export default function PhotoGrid({ photos }) {
  const downloadImage = async (url, filename) => {
    const response = await fetch(url);
    const blob = await response.blob();
    const blobUrl = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = blobUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-6">
      {photos.map((photo) => (
        <div
          key={photo.id}
          className="relative max-w-sm rounded-xl overflow-hidden shadow-lg group"
        >
          <img
            className="w-full h-64 object-cover transition-all duration-300 group-hover:blur-sm"
            src={photo.src.large}
            alt={photo.photographer}
          />

          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a
              href={photo.src.original}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300 mb-2"
            >
              View
            </a>

            <button
              onClick={() =>
                downloadImage(
                  photo.src.original,
                  `${photo.photographer}-photo.jpg`
                )
              }
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Download
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
