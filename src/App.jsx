import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import InfoGrid from "./components/InfoGrid";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <div className="LandingPage">
        <div>
          <NavBar></NavBar>
          <Header></Header>
          <InfoGrid></InfoGrid>
        </div>
        <Footer></Footer>
      </div>

      {/* <div className="ChatRoom grid grid-cols-[1fr_3fr_1fr] bg-gray-300 h-screen w-screen">
        <Sidebar></Sidebar>
      </div> */}
    </div>
  );
}

export default App;
