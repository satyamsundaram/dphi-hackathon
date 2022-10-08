import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChallengeInfo from "./components/ChallengeInfo";
import CreateChallenge from "./components/CreateChallenge";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="createChallenge" element={<CreateChallenge />} />
          <Route path="hackathon/:id" element={<ChallengeInfo />} />
          <Route path="hackathon/:id/edit" element={<CreateChallenge />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
