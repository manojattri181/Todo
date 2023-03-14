import { useEffect, useState } from "react";
import HomePage from "./Pages/HomePage";

function App() {
  // * Theme States 
  let themeStored = localStorage.getItem("theme");
  const [theme, setTheme] = useState(themeStored ? themeStored : "system");
  const element = document.documentElement;


  const options = [
    {
      icon: "sunny",
      text: "light"
    },
    {
      icon: "moon",
      text: "dark"
    },
    {
      icon: "desktop-outline",
      text: "system"
    }
  ];

  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;
      default:
        localStorage.removeItem("theme");
        break
    }
  }, [theme])

  return (
    <div className="min-h-screen dark:text-gray-100 dark:bg-slate-900 duration-100">
      <div className="fixed top-5 right-10 duration-100 dark:bg-slate-800 bg-gray-100 rounded">
        {
          options?.map((opt) => (
            <button key={opt.text}
              onClick={() => setTheme(opt.text)}
              className={`w-8 h-8 leading-9 text-xl rounded-full ${theme === opt.text && "text-sky-600"}`} >
              <ion-icon name={opt.icon}></ion-icon>
            </button>
          ))
        }
      </div>
      {/* Components layout */}
      <div>
        <HomePage />
      </div>
    </div>
  )
}

export default App;
