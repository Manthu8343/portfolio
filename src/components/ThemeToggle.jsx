// import { Moon, Sun } from "lucide-react";
// import { useEffect, useState } from "react";
// import { cn } from "@/lib/utils";

// export const ThemeToggle = () => {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   useEffect(() => {
//     const storedTheme = localStorage.getItem("theme");
//     if (storedTheme === "dark") {
//       setIsDarkMode(true);
//       document.documentElement.classList.add("dark");
//     } else {
//       localStorage.setItem("theme", "light");
//       setIsDarkMode(false);
//     }
//   }, []);

//   const toggleTheme = () => {
//     if (isDarkMode) {
//       document.documentElement.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//       setIsDarkMode(false);
//     } else {
//       document.documentElement.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//       setIsDarkMode(true);
//     }
//   };

//   return (
//     <button
//       onClick={toggleTheme}
//       className={cn(
//         "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
//         "focus:outlin-hidden"
//       )}
//     >
//        {isDarkMode ? (
//         <Sun className="h-6 w-6 text-yellow-300" />
//      ) : (
//        <Moon className="h-6 w-6 text-yellow-400" />
//      )}
//     </button>
//   );
// };


import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <label
      htmlFor="theme-switch"
      className="fixed max-sm:hidden top-5 right-5 z-50 flex items-center cursor-pointer select-none"
    >
      {/* Hidden checkbox */}
      <input
        id="theme-switch"
        type="checkbox"
        checked={isDarkMode}
        onChange={toggleTheme}
        className="sr-only"
      />

      {/* The pill */}
      <div
        className={cn(
          "w-14 h-7 flex items-center rounded-full p-1 transition-colors duration-300",
          isDarkMode
            ? "bg-gradient-to-r from-violet-900 via-fuchsia-800 to-pink-900"


            : "bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400",
          isDarkMode ? "justify-end" : "justify-start"
        )}
      >

        {/* The circle */}
        <div className="w-5 h-5 bg-white rounded-full shadow-md flex items-center justify-center transition-transform duration-300">
          {isDarkMode ? (
            <Sun className="w-4 h-4 text-yellow-300" />
          ) : (
            <Moon className="w-4 h-4 text-yellow-400" />
          )}
        </div>
      </div>
    </label>
  );
};
