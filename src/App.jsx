import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import InfoGrid from "./components/InfoGrid";
import ChatRoom from "./components/chat/ChatRoom";

function App() {
  return (
    <div className="App">
      <div className="LandingPage hidden">
        <div>
          <NavBar />
          <Header />
          <InfoGrid />
        </div>
        <Footer />
      </div>
      <div className="ChatRoom">
        <ChatRoom />
      </div>
    </div>
  );
}

export default App;
