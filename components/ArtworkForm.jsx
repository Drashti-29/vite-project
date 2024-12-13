import React, { useState } from "react";

const ArtworkForm = ({ onAddArtwork }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [year, setYear] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddArtwork({ title, description, year });
    setTitle("");
    setDescription("");
    setYear("");
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h3>Add Artwork</h3>
        <div>
          <label>Title:</label>
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Description:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div>
          <label>Year:</label>
          <input value={year} onChange={(e) => setYear(e.target.value)} />
        </div>
        <button type="submit">Add Artwork</button>
      </form>
    </div>
  );
};

export default ArtworkForm;
