import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import InfoGrid from "./components/InfoGrid";

function App() {
  return (
    <div className="App">
      <div>
        <NavBar></NavBar>
        <Header></Header>
        <InfoGrid></InfoGrid>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
