import React, { useState, useEffect } from "react";

const LanguageLimousineHero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
      {/* Animated Background Stars */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Parallax Background Effect */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          transform: `translate(${mousePosition.x * 0.02}px, ${
            mousePosition.y * 0.02
          }px)`,
          transition: "transform 0.3s ease-out",
        }}
      >
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div
          className="absolute top-40 right-20 w-24 h-24 bg-purple-400 rounded-full blur-2xl opacity-40 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-40 left-1/4 w-20 h-20 bg-pink-400 rounded-full blur-2xl opacity-30 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-8">
        {/* Language Title */}
        <div
          className={`mb-6 md:mb-8 transform transition-all duration-1000 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "-translate-y-10 opacity-0"
          }`}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-center">
            <span className="inline-block bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 bg-clip-text text-transparent animate-pulse">
              LANGUAGE
            </span>
          </h1>
        </div>

        {/* Limousine Title */}
        <div
          className={`mb-8 md:mb-12 transform transition-all duration-1000 delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-center">
            <span className="inline-block text-white drop-shadow-2xl tracking-tight">
              LIMOUSINE
            </span>
          </h2>
        </div>

        {/* Microphone Icon */}
        <div
          className={`mb-8 md:mb-12 transform transition-all duration-1000 delay-500 ${
            isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
          }`}
        >
          <div className="relative group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-full blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-300 animate-pulse"></div>
            <div className="relative bg-gradient-to-br from-purple-800 to-purple-900 p-6 md:p-8 rounded-full border-2 border-purple-600 hover:border-orange-500 transition-all duration-300 transform hover:scale-110">
              <svg
                className="w-8 h-8 md:w-12 md:h-12 text-orange-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2a3 3 0 0 1 3 3v6a3 3 0 0 1-6 0V5a3 3 0 0 1 3-3z" />
                <path d="M19 10v1a7 7 0 0 1-14 0v-1" />
                <path d="M12 18v4" />
                <path d="M8 22h8" />
              </svg>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-orange-500 rounded-full animate-ping"></div>
            </div>
          </div>
        </div>

        {/* Subtitle */}
        <div
          className={`mb-12 md:mb-16 transform transition-all duration-1000 delay-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
          }`}
        >
          <p className="text-white/80 text-lg md:text-xl lg:text-2xl text-center max-w-2xl px-4 font-light tracking-wide">
            A <span className="text-orange-400 font-semibold">GREAT</span>{" "}
            WELCOME FOR YOUR{" "}
            <span className="text-orange-400 font-semibold">CLIENTS</span>
          </p>
        </div>

        {/* Earth Globe */}
        <div
          className={`transform transition-all duration-1000 delay-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-green-500 to-blue-600 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 animate-pulse"></div>
            <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white/20 hover:border-orange-500/50 transition-all duration-500 transform hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-green-500 to-blue-800 rounded-full"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent rounded-full"></div>

              {/* Continents simulation */}
              <div className="absolute top-8 left-8 w-16 h-12 bg-green-600 rounded-lg opacity-80 transform rotate-12"></div>
              <div className="absolute top-16 right-12 w-12 h-16 bg-green-700 rounded-lg opacity-70 transform -rotate-6"></div>
              <div className="absolute bottom-12 left-16 w-20 h-8 bg-green-600 rounded-lg opacity-75 transform rotate-45"></div>
              <div className="absolute bottom-16 right-8 w-14 h-10 bg-green-700 rounded-lg opacity-65 transform -rotate-12"></div>

              {/* Rotating animation overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-spin"
                style={{ animationDuration: "20s" }}
              ></div>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full shadow-inner"></div>
            </div>

            {/* Orbiting elements */}
            <div
              className="absolute inset-0 animate-spin"
              style={{ animationDuration: "30s" }}
            >
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-orange-400 rounded-full"></div>
            </div>
            <div
              className="absolute inset-0 animate-spin"
              style={{
                animationDuration: "25s",
                animationDirection: "reverse",
              }}
            >
              <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className={`mt-12 md:mt-16 transform transition-all duration-1000 delay-1200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
          }`}
        >
          <button className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-full text-white font-bold text-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-orange-400 rounded-full opacity-20 animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LanguageLimousineHero;
