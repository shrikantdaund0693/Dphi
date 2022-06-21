import "./assets/styles/App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Outcome from "./components/Outcome";
import Explore from "./components/Explore";
import Details from "./components/Details";
import ChallengeForm from "./components/ChallengeForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Outcome />
                <Explore />
              </>
            }
          ></Route>
          <Route path="/details/:challengeId" element={<Details />}></Route>
          <Route path="/create-challenge" element={<ChallengeForm />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
