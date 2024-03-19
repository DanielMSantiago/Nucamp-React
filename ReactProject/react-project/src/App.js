import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Playlists from "./pages/Playlists";
import "./App.css";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Playlists" element={<Playlists />} />
      </Routes>
    </div>
  );
}

export default App;
