import React from "react";

function ProfileImage(props) {
  const { imageUrl, altText } = props;

  return <img src={imageUrl} className="profile" alt={altText} />;
}

export default ProfileImage;
