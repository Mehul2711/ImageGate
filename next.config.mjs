const { env } = process;

export default {
  async rewrites() {
    return [
      {
        source: "/api/:path*", // Path matching the API endpoint in your Next.js app
        destination: `http://localhost:5000/:path*`, // Proxy to the Express.js backend
      },
    ];
  },
};
