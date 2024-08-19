import React from "react";
import { getLinkWithSocialLinks } from "../actions";
import ProfileImage from "@/components/ProfileImage";
import SocialLinksPreview from "@/components/SocialLinksPreview";
import FullSocialLinks from "@/components/FullSocialLinks";

const UserLink = async ({ params }: { params: { userLink: string } }) => {
  const links = await getLinkWithSocialLinks(params.userLink);

  return (
    <>
      <div className="flex  min-h-screen items-center justify-center">
        <div className="mockup-phone">
          <div className="camera"></div>
          <div className="display">
            <div
              className={`artboard artboard-demo phone-1 gap-2 overflow-y-scroll ${
                links?.socialLinks && links?.socialLinks?.length > 6 ? "pt-52" : "pt-14"
              }  `}
            >
              <ProfileImage profileName={links?.profileName!} imageUrl={links?.imageUrl!} />
              <h2 className="text-xl font-extrabold">{links?.profileName}</h2>
              <p className="text-md font-bold">{links?.description}</p>
              <div className="flex gap-3">
                <SocialLinksPreview socialLinks={links?.socialLinks!} />
              </div>
              <div className="w-[280px]  flex flex-col items-center justify-center gap-2 mt-2">
                <FullSocialLinks socialLinks={links?.socialLinks!} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserLink;
