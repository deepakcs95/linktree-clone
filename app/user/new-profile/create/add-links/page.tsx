import { AddLinks } from "@/components/addLinks";
import CreateLinkHeader from "@/components/createLinkHeader";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

const SelectPlatforms = async () => {
  const cookieStore = cookies();
  const selectedItems = await JSON.parse(cookieStore.get("selectedItems")?.value || "[]");
  if (selectedItems.length === 0) {
    return redirect("/user/new-profile/create/select-platforms");
  }

  return (
    <>
      <CreateLinkHeader
        title="Add your links"
        subtitle="Complete the fields below to add your content to your new Linktree."
      />
      <AddLinks selectedTypes={selectedItems} />
    </>
  );
};

export default SelectPlatforms;
