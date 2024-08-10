import CreateLinkHeader from "@/components/createLinkHeader";
import PlatformPicker from "@/components/platformPicker";
import React from "react";

const AddSocialLinks = () => {
  return (
    <>
      <CreateLinkHeader
        title="Select your content"
        subtitle="Pick up to 5 link types to get started."
      />
      <PlatformPicker />
    </>
  );
};

export default AddSocialLinks;
