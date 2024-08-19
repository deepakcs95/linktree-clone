"use client";

import React from "react";
import Link from "next/link";
import { UserLinkModal } from "./UserLinkModal";

interface LinkProps {
  userName: string;
}

const UserLinkItem: React.FC<LinkProps> = ({ userName }) => {
  const [isModalOpen, setModalOpen] = React.useState(false);

  const handleOpenModal = (e: React.MouseEvent) => {
    e.preventDefault();
    setModalOpen(true);
  };

  const handleCloseModal = (e: React.MouseEvent) => {
    e.preventDefault();
    setModalOpen(false);
  };

  return (
    <>
      <li className="w-full">
        <Link
          className="flex items-center justify-between w-full bg-white py-4 px-6 outline outline-1 outline-gray-300 shadow-lg rounded-lg transition-transform transform hover:scale-105"
          href={`/${userName}`}
        >
          <span className="flex-1 text-center text-lg font-semibold text-gray-800">{userName}</span>
          <button
            className="ml-4 bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-600 transition-colors"
            onClick={handleOpenModal}
          >
            &#x2715;
          </button>
        </Link>
      </li>
      <UserLinkModal isOpen={isModalOpen} onClose={handleCloseModal} userName={userName} />
    </>
  );
};

export default UserLinkItem;
