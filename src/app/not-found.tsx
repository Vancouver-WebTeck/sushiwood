export default function NotFound() {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white text-center px-4">
        <h1 className="text-5xl font-bold mb-6">404</h1>
        <p className="text-xl mb-4">Oops! The page you’re looking for doesn’t exist.</p>
        <a
          href="https://sushiwood.com/"
          className="inline-block mt-4 px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition"
        >
          Go back home
        </a>
      </main>
    );
  }
  