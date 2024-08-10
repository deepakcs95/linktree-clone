import CreateLinkHeader from "@/components/createLinkHeader";
import LinktreePreview from "@/components/linktreePreview";
import ProfileInfo from "@/components/profileInfo";
import Button from "@/components/submitButton";
import React from "react";

const SelectProfile = () => {
  return (
    <>
      <CreateLinkHeader
        title="Your Linktree is ready!
"
        subtitle={`It's time to share it with the world
`}
      />
      <p className="font-bold text-xl">linktr.ee/deepkasak</p>
      <LinktreePreview />
      <button className="sticky bottom-7 w-[400px] text-white py-5 rounded-xl bg-blue-500">
        Continue
      </button>
    </>
  );
};

export default SelectProfile;
