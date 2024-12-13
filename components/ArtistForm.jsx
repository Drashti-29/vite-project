import React, { useState } from "react";
// import './style.css';
import './css/style.css';

const ArtistForm = ({ onAddArtist }) => {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddArtist({ name, bio, email });
    setName("");
    setBio("");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Artist</h3>
      <div>
        <label>Name:</label>
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Bio:</label>
        <textarea value={bio} onChange={(e) => setBio(e.target.value)} />
      </div>
      <div>
        <label>Email:</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <button type="submit">Add Artist</button>
    </form>
    
  );
};

export default ArtistForm;
