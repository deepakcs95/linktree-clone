import CreateLinkHeader from "@/components/createLinkHeader";
import LinktreePreview from "@/components/linktreePreview";
import ProfileInfo from "@/components/profileInfo";
import SubmitButton from "@/components/submitButton";
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
    </>
  );
};

export default SelectProfile;
