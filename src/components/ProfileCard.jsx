import React from 'react';
import ProfileImage from './ProfileImage';
import ProfileInfo from './ProfileInfo';
import ContactButton from './ContactButton';

const ProfileCard = ({ name, image, bio, skills }) => {
  return (
    <div style={{
      width: "300px",
      margin: "20px auto",
      padding: "20px",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      borderRadius: "10px",
      backgroundColor: "#fff"
    }}>
      <ProfileImage image={image} />
      <ProfileInfo name={name} bio={bio} skills={skills} />
      <ContactButton />
    </div>
  );
};

export default ProfileCard;
