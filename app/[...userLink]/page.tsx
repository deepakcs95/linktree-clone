import { PlatfromSmall } from "@/utils/platformTypes";
import React from "react";

const UserLink = ({ params }: { params: { userLink: string } }) => {
  return (
    <>
      <div className="flex flex-col items-center pt-20 gap-10 h-screen   p-5  bg-gradient-to-tl  from-[#928d87] to-[#f5f1f0]  ">
        <div className="w-36 bg-blue-400 aspect-square rounded-full"></div>
        <h2 className="text-3xl font-extrabold">{params.userLink}</h2>

        <div className="flex gap-6">
          {PlatfromSmall.map((Icon, index) => (
            <Icon
              className="  cursor-pointer hover:scale-[1.2] transition-all"
              key={index}
              fontSize={40}
            />
          ))}
        </div>
        {PlatfromSmall.map((Icon, index) => (
          <div
            className="py-5 w-full max-w-[580px] bg-[#f8f8f6] flex justify-center items-center  border-r-2  cursor-pointer hover:scale-x-[1.07] transition-all duration-75"
            key={index}
          >
            <p className="flex-1 text-center text-xl font-bold">index</p>
            {/* <svg
              className=" ml-auto mr-2"
              onClick={() => document.getElementById("my_modal_3").showModal()}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="24px"
              height="24px"
            >
              <circle cx="12" cy="5" r="2" />
              <circle cx="12" cy="12" r="2" />
              <circle cx="12" cy="19" r="2" />
            </svg> */}
          </div>
        ))}
      </div>
      <dialog id="my_modal_3" className="modal ">
        <div className="w-[580px] bg-white  ">
          {shareLinks.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2 hover:bg-gray-100 rounded-md"
            >
              <span className="flex items-center">
                <span className="mr-2">{item.icon}</span> Share on {item.name}
              </span>
              <span>➔</span>
            </a>
          ))}
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default UserLink;

const link = "http://localhost:3000/sdsd";

const shareLinks = [
  { name: "Snapchat", icon: "🔗", url: `https://snapchat.com/share?url=${link}` },
  { name: "Facebook", icon: "🔗", url: `https://www.facebook.com/sharer/sharer.php?u=${link}` },
  {
    name: "LinkedIn",
    icon: "🔗",
    url: `https://www.linkedin.com/shareArticle?mini=true&url=${link}`,
  },
  { name: "X", icon: "🔗", url: `https://x.com/share?url=${link}` },
  { name: "WhatsApp", icon: "🔗", url: `https://wa.me/?text=${link}` },
  { name: "Messenger", icon: "🔗", url: `fb-messenger://share/?link=${link}` },
  { name: "Email", icon: "✉️", url: `mailto:?subject=Check this out&body=${link}` },
];
