export default function InfoSection() {
  return (
    <div className="hidden md:block bg-blue-800 text-white w-1/2 p-10">
      <h2 className="text-2xl font-bold mb-6">Welcome to ImageGate</h2>
      <ul className="space-y-4">
        <li>
          <h3 className="text-lg font-semibold">Explore Stunning Images</h3>
          <p className="text-sm">
            Join the ImageGate community to search and explore beautiful images.
          </p>
        </li>
        <li>
          <h3 className="text-lg font-semibold">Discover New Inspiration</h3>
          <p className="text-sm">
            Get inspired by a vast collection of breathtaking photography.
          </p>
        </li>
        <li>
          <h3 className="text-lg font-semibold">Seamless Image Access</h3>
          <p className="text-sm">
            Easily find and manage high-quality images for your creative
            projects.
          </p>
        </li>
      </ul>
    </div>
  );
}
