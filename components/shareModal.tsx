import React from "react";

type ModalProps = {
  link: string;
  onClose?: () => void;
};

const ShareModal: React.FC<ModalProps> = ({ link, onClose }) => {
  const shareLinks = [
    { name: "Snapchat", icon: "🔗", url: `https://snapchat.com/share?url=${link}` },
    {
      name: "Facebook",
      icon: "🔗",
      url: `https://www.facebook.com/sharer/sharer.php?u=${link}`,
    },
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

  const handleCopyLink = () => {
    navigator.clipboard.writeText(link);
    alert("Link copied to clipboard!");
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-80 p-6">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Share this Link</h2>
          <button onClick={onClose} className="text-gray-500">
            ✖
          </button>
        </div>
        <div className="mt-4">
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
        </div>
        <div className="mt-4">
          <button
            onClick={handleCopyLink}
            className="w-full flex justify-between items-center bg-gray-200 p-2 rounded-md hover:bg-gray-300"
          >
            <span className="flex items-center">
              <span>🔗</span> {link}
            </span>
            <span className="ml-4">Copy</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;
