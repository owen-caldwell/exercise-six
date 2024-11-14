import "@/styles/globals.css";
import { initializeApp } from "firebase/app";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Header from "@/components/Header";

const firebaseConfig = {
  apiKey: "AIzaSyBIfT-RgReFBmsl7iIAKPKjhi1-ByhPfog",
  authDomain: "exercise-6-1c0c8.firebaseapp.com",
  projectId: "exercise-6-1c0c8",
  storageBucket: "exercise-6-1c0c8.firebasestorage.app",
  messagingSenderId: "455669538160",
  appId: "1:455669538160:web:e99bb875188dc1636843b5",
};
export default function App({ Component, pageProps }) {
  const [appInitialized, setAppInitialized] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInformation, setUserInformation] = useState(null);
  const [error, setError] = useState(null);

  async function LotsOfDataBigFunction() {
    setIsLoading(true);
    await getData('').then(() => {
        setIsLoading(false);
    }).catch()
  }
  useEffect(() => {
    if (appInitialized) {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUserInformation(user);
          setIsLoggedIn(true);
        } else {
          setUserInformation(null);
          setIsLoggedIn(false);
        }
        setIsLoading(false);
      });
    }
    initializeApp(firebaseConfig);
    setAppInitialized(true);
  }, [appInitialized]);
  console.log({ userInformation })
  if (isLoading) return null;
  return (
    
  )
}
