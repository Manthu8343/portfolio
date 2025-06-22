import { ArrowDown } from "lucide-react";
import { useState } from "react";

export const HeroSection = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const Resume =
    "https://drive.google.com/uc?export=download&id=1bUs61r1DbLV_--VsernhXqePWoJFHqQR";

  const handleResumeDownload = async () => {
    setIsDownloading(true);

    try {
      const link = document.createElement("a");
      link.href = Resume;
      link.download = "Hanumanthu_Resume.pdf";
      link.target = "_blank"; 
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      setTimeout(() => {
        setIsDownloading(false);
      }, 100);
    } catch (error) {
      console.error("Download failed:", error);
      setIsDownloading(false);
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    >
      <div className="container max-w-6xl mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-2">
              <p className="text-lg text-cyan-400 opacity-0 animate-fade-in font-medium">
                Hello, it's Me
              </p>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                <span className="text-white opacity-0 animate-fade-in-delay-1">
                  Hanumanthu
                </span>
              </h1>
              <p className="text-xl md:text-2xl opacity-0 animate-fade-in-delay-2">
                <span className="text-white">And I'm a </span>
                <span className="text-cyan-400 font-semibold">
                  Frontend Developer
                </span>
              </p>
            </div>

            <p className="text-base md:text-lg text-slate-300 max-w-xl opacity-0 animate-fade-in-delay-3">
              I create stellar web experiences with modern technologies.
              Specializing in front-end development, I build interfaces that are
              both beautiful and functional.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 text-center"
              >
                Get In Touch
              </a>

              {/* Option 1: With Loading Spinner */}
              <button
                onClick={handleResumeDownload}
                disabled={isDownloading}
                className="px-6 py-2 rounded-full border border-cyan-400 text-white hover:bg-cyan-400 hover:text-slate-900 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/25 transition-all duration-300 ease-in-out cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 min-w-[160px]"
              >
                {isDownloading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                    <span>Downloading...</span>
                  </>
                ) : (
                  <>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    <span>Download Resume</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Photo Section */}
          <div className="flex justify-center order-1 lg:order-2">
            <div className="relative opacity-0 animate-fade-in-delay-2">
              {/* Glowing Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 rounded-full blur-3xl opacity-30 animate-pulse-slow scale-125"></div>

              {/* Circular Container */}
              <div className="relative">
                {/* Outer Glow Ring */}
                <div className="absolute inset-0 rounded-full animate-spin-slow">
                  <div className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 p-1 shadow-2xl shadow-cyan-500/30">
                    <div className="w-full h-full rounded-full bg-slate-900"></div>
                  </div>
                </div>

                {/* Photo Container */}
                <div className="relative z-10 p-4">
                  <div className="w-72 h-72 md:w-88 md:h-88 rounded-full overflow-hidden bg-gradient-to-br from-slate-700 to-slate-800 shadow-2xl shadow-purple-500/20 border-2 border-transparent bg-clip-padding">
                    <img
                      src="src\Images\ProfilePhoto.jpeg"
                      alt="Hanumanthu - Frontend Developer"
                      className="w-full h-full object-cover object-center scale-110 hover:scale-125 transition-transform duration-700"
                    />
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-10 -left-4 w-3 h-3 bg-cyan-400 rounded-full animate-float"></div>
                <div className="absolute top-32 -right-6 w-2 h-2 bg-purple-400 rounded-full animate-float-delayed"></div>
                <div className="absolute bottom-20 -left-8 w-4 h-4 bg-cyan-300 rounded-full animate-float-slow"></div>
                <div className="absolute bottom-32 right-4 w-2 h-2 bg-purple-300 rounded-full animate-float"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <a
          href="#about"
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce cursor-pointer"
        >
          <span className="text-sm text-slate-400 mb-2">Scroll</span>
          <ArrowDown className="h-5 w-5 text-cyan-400" />
        </a>
      </div>

      <style jsx>{`
        html {
          scroll-behavior: smooth;
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-delay-1 {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          20% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-delay-2 {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          40% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-delay-3 {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          60% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-delay-4 {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          80% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.4;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }

        .animate-fade-in-delay-1 {
          animation: fade-in-delay-1 1.5s ease-out forwards;
        }

        .animate-fade-in-delay-2 {
          animation: fade-in-delay-2 2s ease-out forwards;
        }

        .animate-fade-in-delay-3 {
          animation: fade-in-delay-3 2.5s ease-out forwards;
        }

        .animate-fade-in-delay-4 {
          animation: fade-in-delay-4 3s ease-out forwards;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 3s ease-in-out infinite 0.5s;
        }

        .animate-float-slow {
          animation: float-slow 4s ease-in-out infinite 1s;
        }
      `}</style>
    </section>
  );
};
