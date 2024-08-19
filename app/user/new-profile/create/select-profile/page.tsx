import CreateLinkHeader from "@/components/CreateLinkHeader";
import ProfileInfo from "@/components/ProfileInfo";
import React from "react";

const SelectProfile = () => {
  return (
    <>
      <CreateLinkHeader title="Add profile details" subtitle={`We've gotten you started`} />
      <p className="font-bold text-xl">Add title and bio</p>
      <ProfileInfo />
    </>
  );
};

export default SelectProfile;
