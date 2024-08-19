import CreateLinkHeader from "@/components/CreateLinkHeader";
import PlatformPicker from "@/components/PlatformPicker";
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
