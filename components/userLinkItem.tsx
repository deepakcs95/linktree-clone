"use client";

import React from "react";
import Link from "next/link";
import { UserLinkModal } from "./userLinkModal";

interface LinkProps {
  userName: string;
}

const UserLinkItem: React.FC<LinkProps> = ({ userName }) => {
  const [isModalOpen, setModalOpen] = React.useState(false);

  const handleOpenModal: React.MouseEventHandler<HTMLElement> = (e) => {
    e.preventDefault();
    setModalOpen(true);
  };
  const handleCloseModal: React.MouseEventHandler<HTMLElement> = (e) => {
    e.preventDefault();
    setModalOpen(false);
  };

  return (
    <>
      <li className="w-full">
        <Link
          className="flex items-center justify-between w-full bg-white py-5 outline outline-1 outline-gray-200 shadow-md rounded-sm"
          href={`/${userName}`}
        >
          <span className="flex-1 text-center">{userName}</span>
          <button
            className="ml-4 mr-2 bg-red-500 text-white px-2 py-1 rounded-xl hover:bg-red-600"
            onClick={handleOpenModal}
          >
            x
          </button>
        </Link>
      </li>
      <UserLinkModal isOpen={isModalOpen} onClose={handleCloseModal} userName={userName} />
    </>
  );
};

export default UserLinkItem;
