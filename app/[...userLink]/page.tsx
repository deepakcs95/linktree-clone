import React from "react";
import { getLinkWithSocialLinks } from "../actions";
import ProfileImage from "@/components/ProfileImage";
import SocialLinksPreview from "@/components/SocialLinksPreview";
import FullSocialLinks from "@/components/FullSocialLinks";

const UserLink = async ({ params }: { params: { userLink: string } }) => {
  const links = await getLinkWithSocialLinks(params.userLink);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
      <div className="mockup-phone ">
        <div className="camera"></div>
        <div className="display bg-white rounded-lg  overflow-y-scroll">
          <div
            className={`artboard artboard-demo phone-1 p-6 ${
              links?.socialLinks && links?.socialLinks.length > 6 ? "pt-40" : "pt-24"
            }`}
          >
            <ProfileImage profileName={links?.profileName!} imageUrl={links?.imageUrl!} />
            <h2 className="text-3xl font-extrabold text-gray-800 mt-4 break-words	  ">
              {links?.profileName}
            </h2>
            <p className="max-w-[25ch] text-center   text-sm font-semibold text-gray-600 mt-1  break-words	">
              {links?.description}
            </p>
            <div className="mt-2">
              <SocialLinksPreview socialLinks={links?.socialLinks!} />
            </div>
            <div className="w-full max-w-xs mx-auto mt-3">
              <FullSocialLinks socialLinks={links?.socialLinks!} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLink;
