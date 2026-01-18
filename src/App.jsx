import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import InfoGrid from "./components/InfoGrid";
import ChatRoom from "./components/chat/ChatRoom";
import { Routes, Route } from 'react-router-dom';
import { useEffect } from "react";

function App() {

  // 🔵 Test connection to Flask backend
  useEffect(() => {
    async function testAPI() {
      try {
        const res = await fetch("/api/test");
        const data = await res.json();
        console.log("API response:", data);
      } catch (err) {
        console.error("API test failed:", err);
      }
    }
    testAPI();
  }, []);

  return (
    <div className="App min-h-screen w-full flex flex-col bg-white">
      <Routes>
        <Route
          path="/"
          element={
            <div className="LandingPage w-full flex flex-col">
              <NavBar />
              <Header />
              <InfoGrid />
              <Footer />
            </div>
          }
        />

        <Route
          path="/chat"
          element={
            <div className="ChatRoom w-full h-full flex">
              <ChatRoom />
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
