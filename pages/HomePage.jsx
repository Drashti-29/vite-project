import React, { useState, useEffect } from "react";
import ArtistForm from "../components/ArtistForm";
import ArtworkForm from "../components/ArtworkForm";
import ArtistList from "../components/ArtistList";
import ArtworkList from "../components/ArtworkList";
import './HomePage.css';

const HomePage = () => {
  const [artists, setArtists] = useState([]);
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);  // Added loading state
  const [showArtistForm, setShowArtistForm] = useState(false); // State for toggling artist form
  const [showArtworkForm, setShowArtworkForm] = useState(false); // State for toggling artwork form

  // Fetch data from the API
  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const response = await fetch("https://http5222-2.onrender.com/artist");
        const data = await response.json();
        console.log(data);
        setArtists(data.artists); // Assuming artists are in 'data.artists'
      } catch (error) {
        console.error("Error fetching artists:", error);
      }
    };

    const fetchArtworks = async () => {
      try {
        const response = await fetch("https://http5222-2.onrender.com/artwork");
        const data = await response.json();
        console.log(data);
        setArtworks(data.artworks); // Assuming artworks are in 'data.artworks'
      } catch (error) {
        console.error("Error fetching artworks:", error);
      }
    };

    fetchArtists();
    fetchArtworks();

    // Set loading to false once the data is fetched
    setLoading(false);
  }, []);

  // Handlers for adding new data
  const addArtist = (artist) => setArtists([...artists, artist]);
  const addArtwork = (artwork) => setArtworks([...artworks, artwork]);

  // Toggle functions for forms
  const toggleArtistForm = () => setShowArtistForm(!showArtistForm);
  const toggleArtworkForm = () => setShowArtworkForm(!showArtworkForm);

  if (loading) {
    return <div>Loading...</div>; // Show a loading indicator
  }

  return (
    <div className="homepage" style={{ padding: "20px" }}>
      <h1>Welcome to the Artist and Artwork Portfolio</h1>

      {/* Buttons to toggle forms */}
      <div className="form-buttons">
        <button
          onClick={toggleArtistForm}
          className="toggle-btn"
        >
          {showArtistForm ? "Hide Artist Form" : "Add Artist"}
        </button>
        <button
          onClick={toggleArtworkForm}
          className="toggle-btn"
        >
          {showArtworkForm ? "Hide Artwork Form" : "Add Artwork"}
        </button>
      </div>

      {/* List of Artists and Artworks */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <ArtistList artists={artists} />
        </div>
        <div>
          <ArtworkList artworks={artworks} />
        </div>
      </div>

      {/* Conditionally render the forms */}
      {showArtistForm && (
        <div className="form-container">
          <ArtistForm onAddArtist={addArtist} />
        </div>
      )}
      {showArtworkForm && (
        <div className="form-container">
          <ArtworkForm onAddArtwork={addArtwork} />
        </div>
      )}
    </div>
  );
};

export default HomePage;
