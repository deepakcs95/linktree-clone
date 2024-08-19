import React from "react";
import Link from "next/link";
import { socialIconsWithUrls } from "@/utils/platformTypes";

const SocialLinksPreview = ({
  socialLinks,
}: {
  socialLinks: Array<{ platform: string; url: string }>;
}) => {
  return (
    <div className="flex gap-3">
      {socialLinks?.slice(0, 3).map((link) => {
        const IconComponent = socialIconsWithUrls[link.platform]?.icon;
        return (
          <Link
            key={link.platform}
            href={socialIconsWithUrls[link.platform].baseUrl + link.url}
            className="flex-1 text-center text-xl font-bold"
          >
            {IconComponent && <IconComponent fontSize={25} />}
          </Link>
        );
      })}
    </div>
  );
};

export default SocialLinksPreview;
