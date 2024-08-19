"use client";

import React, { useState, useTransition } from "react";
import { deleteLinkAndSocialLinks, mockAction } from "@/app/actions";

interface ModalProps {
  isOpen: boolean;
  onClose: any;
  userName: string;
}

const UserLinkModal: React.FC<ModalProps> = ({ isOpen, onClose, userName }) => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  const handleDelete = async (e: any) => {
    startTransition(async () => {
      try {
        await deleteLinkAndSocialLinks(userName);
        onClose(e);
      } catch (err) {
        console.error("Error deleting item:", err);
        setError("Failed to delete item");
      }
    });
  };

  return (
    <dialog open={isOpen} className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Delete Link</h3>
        <p className="py-4">Are you sure you want to delete {userName}?</p>
        <div className="w-full flex items-center justify-center gap-5">
          <button className="bg-black text-white w-16 py-2 rounded" onClick={onClose}>
            No
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-500 text-white w-16 py-2 rounded hover:bg-red-600"
          >
            {isPending ? <span className="loading loading-spinner loading-sm"></span> : "Yes"}
          </button>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button onClick={onClose}>Close</button>
      </form>
      {error && <p className="text-red-500">{error}</p>}
    </dialog>
  );
};

export { UserLinkModal };
