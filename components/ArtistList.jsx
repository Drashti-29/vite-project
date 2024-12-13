import React from "react";

const ArtistList = ({ artists }) => {
  return (
    <section aria-label="List of Artists">
      <h3>Artists</h3>
      {artists.length > 0 ? (
        <ul>
          {artists.map((artist) => (
            <li key={artist._id}>
              <strong>{artist.name}</strong>: {artist.bio || "No bio available"} (Email:{" "}
              {artist.email || "Unknown"})
            </li>
          ))}
        </ul>
      ) : (
        <p>No artists available.</p>
      )}
    </section>
  );
};

export default ArtistList;
