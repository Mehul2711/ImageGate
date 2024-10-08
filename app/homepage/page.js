"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Profile from "../components/homepage/profile";
import SearchBar from "../components/homepage/searchBar";
import PhotoGrid from "../components/homepage/photoGrid";
import Pagination from "../components/homepage/pagination";
import Spinner from "../components/homepage/spinner";

export default function Homepage() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [user, setUser] = useState({ fullName: "John Doe" });
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  // Move the handleLogout function definition before useEffect
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    router.push("/login");
  };

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("token");
      const storedUser = localStorage.getItem("user");

      if (!token || !storedUser) {
        setIsAuthenticated(false);
        router.push("/login");
      } else {
        setUser(JSON.parse(storedUser));
        setIsAuthenticated(true);
      }
    };

    checkAuth();

    const handleUrlChange = (url) => {
      if (url === "/signup" && isAuthenticated) {
        router.push("/homepage");
        window.location.reload();
      } else if (url !== "/homepage" && isAuthenticated) {
        alert("You have been logged out due to URL change.");
        handleLogout(); // Now handleLogout is accessible here
      }
    };

    router.events?.on("routeChangeStart", handleUrlChange);

    return () => {
      router.events?.off("routeChangeStart", handleUrlChange);
    };
  }, [isAuthenticated, router]);

  const fetchPhotos = async (query, page = 1) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.pexels.com/v1/search?query=${query}&per_page=10&page=${page}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_PEXELS_API_KEY}`,
          },
        }
      );
      if (!res.ok) {
        throw new Error("Error fetching data");
      }
      const data = await res.json();
      setPhotos(data.photos || []);
      setTotalResults(data.total_results || 0);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data from Pexels:", error);
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() === "") {
      setPhotos([]);
      setQuery("");
      return;
    }
    if (query === searchTerm) {
      fetchPhotos(searchTerm, page);
    } else {
      setPage(1);
      setQuery(searchTerm);
    }
  };

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setPhotos([]);
      setQuery("");
      return;
    }
  }, [searchTerm]);

  useEffect(() => {
    if (query) {
      fetchPhotos(query, page);
    }
  }, [query, page]);

  const handleNextPage = () => {
    if (page * 10 < totalResults) {
      setPage(page + 1);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-purple-600 via-pink-500 to-red-500">
        <h1 className="text-3xl font-bold text-white mb-4">
          You are not logged in
        </h1>
        <button
          className="px-6 py-3 bg-indigo-600 text-white rounded-full shadow-lg transform hover:scale-105 hover:bg-indigo-700 transition-all duration-300 ease-in-out"
          onClick={() => router.push("/login")}
        >
          Go to Login
        </button>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden"
      style={{
        backgroundImage: "url('/movinf.gif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Profile user={user} handleLogout={handleLogout} />
      <h1 className="flex justify-center text-6xl font-bold mt-10">
        ImageGate
      </h1>
      <div className="container mx-auto py-12 text-black">
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          handleSearch={handleSearch}
        />

        {loading ? <Spinner /> : null}

        {!loading && photos.length > 0 && <PhotoGrid photos={photos} />}
        {!loading && photos.length > 0 && (
          <Pagination
            page={page}
            handleNextPage={handleNextPage}
            handlePrevPage={handlePrevPage}
            totalResults={totalResults}
          />
        )}

        {!loading && photos.length === 0 && query && (
          <div className="flex justify-center items-center">
            <p className="text-gray-200 text-xl">
              No photos found for &quot;{query}&quot;.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
