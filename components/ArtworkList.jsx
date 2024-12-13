import React from "react";
import './css/style.css';

const ArtworkList = ({ artworks }) => {
  return (
    <section aria-label="List of Artworks">
      <h3>Artworks</h3>
      {artworks.length > 0 ? (
        <ul>
          {artworks.map((artwork) => (
            <li key={artwork._id}>
              <strong>{artwork.title || "Untitled"}</strong>:{" "}
              {artwork.description || "No description available"} (Year:{" "}
              {artwork.year || "Unknown"})
            </li>
          ))}
        </ul>
      ) : (
        <p>No artworks available.</p>
      )}
    </section>
  );
};

export default ArtworkList;
