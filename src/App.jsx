import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "../components/Nav";
import HomePage from "../pages/HomePage";
import ArtistList from "../components/ArtistList";
import ArtworkList from "../components/ArtworkList";

const App = () => {
  return (
    <Router>
      <Nav /> {/* Navigation bar */}
      <Routes>
        {/* Define the routes for each page */}
        <Route path="/" element={<HomePage />} />
        <Route path="/ArtistList" element={<ArtistList />} />
        <Route path="/ArtworkList" element={<ArtworkList />} />
      </Routes>
    </Router>
  );
};

export default App;