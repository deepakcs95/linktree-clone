import CreateLinkHeader from "@/components/CreateLinkHeader";
import LinktreePreview from "@/components/LinktreePreview";
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
