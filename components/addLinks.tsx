"use client";

import { PlatformIcons } from "@/utils/platformTypes";
import { useUsernamesValidation } from "@/lib/hooks/useUsernamesValidation ";
import SubmitButton from "./submitButton";

export const AddLinks = ({ selectedTypes }: { selectedTypes: string[] }) => {
  const { errors, handleChange, handleSubmit, socialLinks } = useUsernamesValidation(selectedTypes);
  const filteredIcons = PlatformIcons.filter(({ name }) => selectedTypes.includes(name));

  return (
    <>
      <h3 className="text-xl font-bold">Your Selections</h3>
      <div>
        {filteredIcons.map(({ name, icon: IconComponent }) => {
          const hasErrors = errors && errors[name];

          return (
            <div key={name} className="animate-slideUp flex flex-col gap-4 items-center">
              <div className="flex  items-center gap-4 w-full max-w-md" key={name}>
                <IconComponent fontSize={50} />
                <input
                  onChange={(e) => handleChange(name, e.target.value)}
                  placeholder={`${name} username`}
                  value={socialLinks[name] || ""}
                  className={`w-full  px-7 py-5 bg-[#f7f8f9] cursor-pointer rounded-xl hover:outline outline-gray-200 focus:outline outline-4 focus:outline-black outline-offset-6  transition-all ${
                    hasErrors ? "outline outline-red-600 outline-offset-6" : "mb-3"
                  }`}
                />
              </div>
              <label className="animate-slideUp text-red-500  font-bold" htmlFor="name">
                {hasErrors}
              </label>
            </div>
          );
        })}
      </div>

      <SubmitButton disabled={false} onClick={handleSubmit}>
        Continue
      </SubmitButton>
    </>
  );
};
