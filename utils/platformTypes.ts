import { Icon } from "next/dist/lib/metadata/types/metadata-types";
import { IconType } from "react-icons";
import { CgWebsite } from "react-icons/cg";
import {
  FaAmazon,
  FaFacebook,
  FaInstagramSquare,
  FaLinkedin,
  FaShoppingCart,
  FaSpotify,
  FaTiktok,
  FaWhatsapp,
  FaYoutubeSquare,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export type ContentType = {
  name: string;
  icon: IconType;
};

export type SocialIconData = {
  icon: IconType;
  baseUrl: string;
};

export const PlatfromSmall: IconType[] = [FaInstagramSquare, FaTiktok, FaWhatsapp];

export const PlatformIcons: ContentType[] = [
  { name: "Instagram", icon: FaInstagramSquare },
  { name: "Tiktok", icon: FaTiktok },
  { name: "Website", icon: CgWebsite },
  { name: "WhatsApp", icon: FaWhatsapp },
  { name: "OnlineStore", icon: FaShoppingCart },
  { name: "Facebook", icon: FaFacebook },
  { name: "Youtube", icon: FaYoutubeSquare },
  { name: "Spotify", icon: FaSpotify },
  { name: "Amazon", icon: FaAmazon },
  { name: "X", icon: FaSquareXTwitter },
  { name: "Linkedin", icon: FaLinkedin },
];

// platforms.ts
export const PlatformBaseUrls: { [key: string]: string } = {
  Instagram: "https://instagram.com/",
  Tiktok: "https://www.tiktok.com/@",
  Website: "https://",
  WhatsApp: "https://wa.me/",
  OnlineStore: "https://",
  Facebook: "https://facebook.com/",
  Youtube: "https://www.youtube.com/c/",
  Spotify: "https://open.spotify.com/user/",
  Amazon: "https://www.amazon.com/shop/",
  X: "https://twitter.com/",
  Linkedin: "https://www.linkedin.com/in/",
};

export const socialIconsWithUrls: { [key: string]: SocialIconData } = {
  Instagram: {
    icon: FaInstagramSquare,
    baseUrl: "https://instagram.com/",
  },
  Tiktok: {
    icon: FaTiktok,
    baseUrl: "https://www.tiktok.com/@",
  },
  Website: {
    icon: CgWebsite,
    baseUrl: "https://",
  },
  WhatsApp: {
    icon: FaWhatsapp,
    baseUrl: "https://wa.me/",
  },
  OnlineStore: {
    icon: FaShoppingCart,
    baseUrl: "https://",
  },
  Facebook: {
    icon: FaFacebook,
    baseUrl: "https://facebook.com/",
  },
  Youtube: {
    icon: FaYoutubeSquare,
    baseUrl: "https://www.youtube.com/c/",
  },
  Spotify: {
    icon: FaSpotify,
    baseUrl: "https://open.spotify.com/user/",
  },
  Amazon: {
    icon: FaAmazon,
    baseUrl: "https://www.amazon.com/shop/",
  },
  X: {
    icon: FaSquareXTwitter,
    baseUrl: "https://twitter.com/",
  },
  Linkedin: {
    icon: FaLinkedin,
    baseUrl: "https://www.linkedin.com/in/",
  },
};

export const contentTypes: { [key: string]: ContentType[] } = {
  Popular: PlatformIcons,
  Creator: ["Tiktok", "Website", "Youtube", "Instagram", "Facebook"].map(
    (name) => PlatformIcons.find((item) => item.name === name)!
  ),
  Music: ["Spotify", "Youtube", "Amazon"].map(
    (name) => PlatformIcons.find((item) => item.name === name)!
  ),
  Personal: ["WhatsApp", "Facebook", "Instagram", "X"].map(
    (name) => PlatformIcons.find((item) => item.name === name)!
  ),
};
