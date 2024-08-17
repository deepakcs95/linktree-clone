"use client";

import { saveUserNames } from "@/app/actions";
import React, { useCallback, useState } from "react";
import { debounce } from "lodash";
import { GrStatusGood } from "react-icons/gr";
import { MdOutlineDangerous } from "react-icons/md";
import SubmitButton from "./submitButton";

function CreateNewLink() {
  const [username, setUsername] = useState("");
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const [isChecking, setIsChecking] = useState(false);

  const handleInputChange = useCallback(
    debounce(async (value: string) => {
      setIsChecking(true);
      setIsValid(null);

      try {
        const data = await fetch(`http://localhost:3000/api/user/${value}`).then((res) =>
          res.json()
        );
        setIsValid(data.isAvailable);
      } catch (error) {
        console.error("Error checking username:", error);
        setIsValid(false);
      } finally {
        setIsChecking(false);
      }
    }, 300),
    []
  );

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newUserName = event.target.value;
    setUsername(newUserName);
    if (newUserName.length > 0) {
      handleInputChange(newUserName);
    } else {
      setIsValid(false);
    }
  };
  const onSubmit = async () => {
    setIsChecking(true);
    await saveUserNames();
  };

  return (
    <>
      <div className="w-full relative bg-gray-200  cursor-pointer text-xl flex mt-10 items-center focus-within:ring-black  focus-within:ring-2 hover:ring-2 transition duration-75 ease-out  rounded-lg overflow-hidden">
        <label className="pl-14 py-7   bg-gray-200" htmlFor="linktr.ee/">
          linktr.ee/
        </label>
        <input
          className="w-full py-7 bg-gray-200 outline-none"
          type="text"
          value={username}
          name="Username"
          placeholder="Username"
          onChange={(e) => onInputChange(e)}
        />
        {isChecking && <span className="bg-black mx-5 loading loading-spinner loading-lg"></span>}
        {isValid && <GrStatusGood className="mx-5" color="green" fontSize={50} />}{" "}
        {isValid === false && <MdOutlineDangerous className="mx-5" color="red" fontSize={50} />}
      </div>
      <p className="pt-12 py-8 text-gray-600 text-[18px] text-center">
        By continuing, you agree to receive offers, news and updates from Linktree
      </p>
      {/* <button
        onClick={onSubmit}
        disabled={!isValid || isChecking}
        className="w-full bg-blue-600 hover:bg-blue-500 p-6 text-xl text-white rounded-3xl disabled:bg-gray-500"
      >
        Continue
      </button> */}
      <SubmitButton disabled={!isValid || isChecking} onClick={onSubmit}>
        Continue
      </SubmitButton>
    </>
  );
}

export default CreateNewLink;
