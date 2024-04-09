import { Typewriter } from "react-simple-typewriter";
// import Image from "next/image";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../config";
import { GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Home() {
  const redirect = useNavigate();

  const IsUserLoggedIn = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        redirect("/dashboard");
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  };

  useEffect(() => {
    IsUserLoggedIn();
  }, [auth.currentUser]);

  const welcomeArray = [
    "Welcome to YuRL Shortner",
    "Bienvenido a YuRL Shortner",
    "Bienvenue sur YuRL Shortner",
    "Willkommen bei YuRL Shortner",
    "Benvenuti su YuRL Shortner",
    "Bem-vindo ao YuRL Shortner",
    "Welkom bij YuRL Shortner",
    "Добро пожаловать на YuRL Shortner",
    "欢迎来到 YuRL Shortner",
    "YuRL Shortnerへようこそ",
    "YuRL Shortner에 오신 것을 환영합니다",
    "مرحبًا بك في YuRL Shortner",
    "YuRL Shortner में आपका स्वागत है",
    "YuRL Shortner'a hoş geldiniz",
    "Välkommen till YuRL Shortner",
    "Καλώς ήρθατε στο YuRL Shortner",
  ];

  return (
    <main className="home-bg min-h-screen max-h-max flex flex-col items-center gap-y-10">
      <header className="p-4 w-full">
        <div className="flex gap-x-3 items-center w-full">
          <h2 className="text-3xl pl-5 font-sans font-semibold">
            YuRL Shortner
          </h2>
        </div>
      </header>
      <div className="w-full px-4">
        <div className="mockup-window border bg-base-300">
          <div className="hero h-[70vh] bg-base-200">
            <div className="hero-content text-center">
              <div className="max-w-md">
                <div className="flex justify-center">
                  <img
                    src={
                      "https://w7.pngwing.com/pngs/981/939/png-transparent-hyperlink-computer-icons-direct-link-others-miscellaneous-text-logo.png"
                    }
                    alt="logo"
                    width={100}
                    className="pb-5 mix-blend-luminosity"
                  />
                </div>
                <h1 className="text-5xl font-bold">Heya User</h1>
                <p className="text-sm font-semibold py-4">
                  {" "}
                  Use our URL shortener and Link-in pages to engage your
                  audience and connect them to the right information.
                </p>
                <p className="py-6 text-lg tracking-wider">
                  <Typewriter
                    words={welcomeArray}
                    delaySpeed={4000}
                    cursorBlinking={true}
                    deleteSpeed={50}
                    loop={false}
                    typeSpeed={100}
                  />
                </p>
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    redirect("/login");
                  }}
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
