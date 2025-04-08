export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#1a1a1a] text-white text-center px-6 py-12 animate-fadeInUp">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">You found a ghost page 👻</h2>
      <p className="max-w-md text-gray-300 mb-8">
        This page might’ve existed once... or maybe it's just shy. Either way, it’s not here now.
      </p>
      <a href="/" className="px-6 py-3 bg-white text-black rounded-md shadow hover:bg-gray-100 transition">
        Take Me Home
      </a>
    </div>
  );
}

