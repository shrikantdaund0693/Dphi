import "./assets/styles/App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Outcome from "./components/Outcome";
import Explore from "./components/Explore";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Outcome />
      <Explore />
    </div>
  );
}

export default App;
