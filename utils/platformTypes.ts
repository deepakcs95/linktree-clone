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
  name: String;
  icon: IconType;
};

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

export const contentTypes: { [key: string]: ContentType[] } = {
  Popular: [
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
  ],
  Creator: [
    { name: "Tiktok", icon: FaTiktok },
    { name: "Website", icon: FaWhatsapp },
    { name: "Youtube", icon: FaYoutubeSquare },
    { name: "Instagram", icon: FaInstagramSquare },
    { name: "Facebook", icon: FaFacebook },
    // Add more relevant items for creators
  ],
  Music: [
    { name: "Spotify", icon: FaSpotify },
    { name: "Youtube", icon: FaYoutubeSquare },
    { name: "Amazon", icon: FaAmazon },
    // Add or remove music-related items
  ],
  Personal: [
    { name: "WhatsApp", icon: FaWhatsapp },
    { name: "Facebook", icon: FaFacebook },
    { name: "Instagram", icon: FaInstagramSquare },
    { name: "X", icon: FaSquareXTwitter },
    // Add more personal-use items if needed
  ],
};
