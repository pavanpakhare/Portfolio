import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="animate-fadeInLeft duration-1000 ease-out">
      <div className="min-h-screen flex flex-col justify-center text-gray-800 bg-[#fdfcfa] px-6 py-12 md:px-12 md:py-20 relative overflow-hidden">
        
        {/* Colorful background blob */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 rounded-full opacity-40 blur-3xl z-0 animate-pulse"></div>

        {/* Grid overlay */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="w-full h-full grid grid-cols-12 gap-0">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="border-r border-gray-200"></div>
            ))}
          </div>
          <div className="absolute inset-0 grid grid-rows-12 gap-0">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="border-b border-gray-200"></div>
            ))}
          </div>
        </div>

        {/* Right vertical buttons (Desktop only) */}
        <div className="hidden md:flex flex-col justify-center space-y-16 absolute right-6 inset-y-0 z-10 animate-fadeInRight delay-500">
          {[
            { icon: <Mail size={18} />, text: "Summon Me", href: "mailto:pavanpakhare808@gmail.com" },
            { icon: <Github size={18} />, text: "Dark Lair", href: "https://github.com/pavanpakhare" },
            { icon: <Linkedin size={18} />, text: "Alter Ego", href: "https://www.linkedin.com/in/pavan-pakhare" },
            { icon: "💬", text: "About", href: "/about", isLink: true },
          ].map(({ icon, text, href, isLink }, i) =>
            isLink ? (
              <Link
                href={href}
                key={i}
                className="inline-flex items-center gap-2 px-4 py-2 hover:bg-gray-100 transition min-w-[150px] transform -rotate-90 origin-right"
              >
                {icon} {text}
              </Link>
            ) : (
              <a
                href={href}
                key={i}
                target="_blank"
                className="inline-flex items-center gap-2 px-4 py-2 hover:bg-gray-100 transition min-w-[150px] transform -rotate-90 origin-right"
              >
                {icon} {text}
              </a>
            )
          )}
        </div>

        {/* Main content */}
        <div className="max-w-3xl w-full mx-auto md:mx-0 md:ml-12 z-10 animate-fadeInLeft delay-300">
          <h1 className="text-2xl md:text-3xl font-light mb-2">Greetings, digital wanderer.</h1>
          <h2 className="text-5xl md:text-6xl font-bold mb-4">I'm Pavan*</h2>
          <p className="text-base md:text-lg text-gray-600 mb-6">
            *Just another caffeine-powered code sorcerer conjuring full-stack web spells from the mystical lands of Maharashtra. Fluent in Java, React, Spring Boot, and sarcastic remarks. I turn pizza into software and bugs into "features."
          </p>

          {/* Buttons for mobile */}
          <div className="flex md:hidden flex-wrap justify-center gap-4 mb-6 animate-fadeInUp delay-500">
            <a
              href="mailto:pavanpakhare808@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-100 transition"
            >
              <Mail size={18} /> Summon Me
            </a>
            <a
              href="https://github.com/pavanpakhare"
              target="_blank"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-100 transition"
            >
              <Github size={18} /> Dark Lair
            </a>
            <a
              href="https://www.linkedin.com/in/pavan-pakhare"
              target="_blank"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-100 transition"
            >
              <Linkedin size={18} /> Alter Ego
            </a>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-100 transition"
            >
              💬 About
            </Link>
          </div>

          <div className="text-sm text-gray-500 animate-fadeIn delay-700">
            Available for freelance wizardry or full-time questing. No dragons, please.
          </div>
        </div>
      </div>
    </div>
  );
}

