import Link from "next/link";
import { socialIconsWithUrls } from "@/utils/platformTypes";

const FullSocialLinks = ({
  socialLinks,
}: {
  socialLinks: Array<{ platform: string; url: string }>;
}) => {
  return (
    <div className="w-[280px] flex flex-col items-center justify-center gap-2 mt-2">
      {socialLinks?.map((link) => {
        const IconComponent = socialIconsWithUrls[link.platform]?.icon;
        return (
          <Link
            key={link.platform}
            href={socialIconsWithUrls[link.platform].baseUrl + link.url}
            className="w-full flex items-center justify-between py-2 px-5 text-center font-bold shadow-md"
          >
            {IconComponent && <IconComponent fontSize={10} />}
            <span>{link.platform}</span>
            <span>📩</span>
          </Link>
        );
      })}
    </div>
  );
};

export default FullSocialLinks;
