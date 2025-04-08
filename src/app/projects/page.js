export default function Projects() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#fdfcfa] text-gray-800 px-6 py-12 md:px-12 md:py-20 animate-fadeInLeft duration-1000 ease-out">
      <h1 className="text-4xl md:text-5xl font-bold mb-10">My Legendary Projects</h1>
      <div className="grid gap-8 md:grid-cols-2 max-w-4xl w-full">
        <div className="p-6 border rounded-lg shadow bg-white">
          <h2 className="text-2xl font-semibold mb-2">BugZapper 3000</h2>
          <p className="text-gray-600">An app that doesn't just squash bugs — it insults them as it does. Built with React and Spring Boot.</p>
        </div>

        <div className="p-6 border rounded-lg shadow bg-white">
          <h2 className="text-2xl font-semibold mb-2">CaffeinateMe</h2>
          <p className="text-gray-600">A full-stack app that finds the nearest coffee shop when my code breaks. Powered by Java and caffeine sensors.* (*Totally fictional)</p>
        </div>

        <div className="p-6 border rounded-lg shadow bg-white">
          <h2 className="text-2xl font-semibold mb-2">404 Finder</h2>
          <p className="text-gray-600">The only tool that can find the page you're looking for when even the browser gives up.</p>
        </div>

        <div className="p-6 border rounded-lg shadow bg-white">
          <h2 className="text-2xl font-semibold mb-2">Dad Jokes API</h2>
          <p className="text-gray-600">Why tell jokes when you can deploy them with CI/CD pipelines? Hosted on Vercel with love and sarcasm.</p>
        </div>
      </div>
    </div>
  );
}

