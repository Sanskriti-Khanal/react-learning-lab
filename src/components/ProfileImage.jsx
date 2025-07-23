
import profileImage from '../images/image.jpg';

const ProfileImage = ({ image }) => {
  return <img src={profileImage} alt="Profile" style={{ width: "120px", borderRadius: "50%" }} />;
};

export default ProfileImage;
