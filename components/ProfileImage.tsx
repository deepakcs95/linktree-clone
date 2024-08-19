import Image from "next/image";
import React from "react";

const ProfileImage = ({ imageUrl, profileName }: { imageUrl?: string; profileName: string }) => {
  return imageUrl ? (
    <Image
      src={imageUrl}
      alt="profile-image"
      width={50}
      height={50}
      className="aspect-square rounded-full "
    />
  ) : (
    <div className="w-[50px]  flex items-center justify-center text-center bg-blue-400 text-white aspect-square rounded-full">
      {profileName[0]}
    </div>
  );
};

export default ProfileImage;
