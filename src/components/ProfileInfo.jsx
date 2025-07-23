import React from 'react';

const ProfileInfo = ({ name, bio, skills }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>{name}</h2>
      <p>{bio}</p>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {skills.map((skill, index) => (
          <li key={index}>🔹 {skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileInfo;
