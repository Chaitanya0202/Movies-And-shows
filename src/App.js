import React from "react";
import PlayVdo from "./Components/PlayVdo";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./Components/Context/ProductContext";
import YoutubeEmbed from "./Components/YoutubeEmbed";
import Movies from "./Components/Movies";

function App() {
  return (
    <div>
      <AppProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<PlayVdo />} />
            <Route exact path="/em" element={<YoutubeEmbed/>} />
            <Route exact path="/movies" element={<Movies/>} />
          </Routes>
        </Router>
      </AppProvider>
    </div>
  );
}

export default App;
