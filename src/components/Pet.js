import React from "react";

function Pet({ pet, onAdoptPet }) {
  const { id, type, age, weight, name, gender, isAdopted } = pet;

  const handleAdoptClick = () => {
    onAdoptPet(id);
  };

  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">{name}</span>
        <div className="meta">
          <span className="date">{type}</span>
          {gender === "male" && <span role="img" aria-label="Male">♂</span>}
          {gender === "female" && <span role="img" aria-label="Female">♀</span>}
        </div>
        <div className="description">
          <p>Age: {age}</p>
          <p>Weight: {weight}</p>
        </div>
      </div>
      <div className="extra content">
        <button
          className={!isAdopted ? "ui primary button" : "ui disabled button"}
          onClick={handleAdoptClick}
          disabled={isAdopted}
        >
          Adopt Pet
        </button>
        <button
          className={isAdopted ? "ui primary button" : "ui disabled button"}
          disabled={!isAdopted}
        >
          Already Adopted
        </button>
      </div>
    </div>
  );
}

export default Pet;