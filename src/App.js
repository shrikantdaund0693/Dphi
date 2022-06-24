import "./assets/styles/App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Outcome from "./components/Outcome";
import Explore from "./components/Explore";
import Details from "./components/Details";
import ChallengeForm from "./components/ChallengeForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import data from "./DUMMY";

function App() {
  const [challenges, setChallenges] = useState(data);
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
                <Explore challenges={challenges} />
              </>
            }
          ></Route>
          <Route
            path="/details/:challengeId"
            element={
              <Details challenges={challenges} setChallenges={setChallenges} />
            }
          ></Route>
          <Route
            path="/create-challenge"
            element={
              <ChallengeForm
                setChallenges={setChallenges}
                challenges={challenges}
              />
            }
          ></Route>
          <Route
            path="/create-challenge/:challengeId"
            element={
              <ChallengeForm
                setChallenges={setChallenges}
                challenges={challenges}
              />
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
