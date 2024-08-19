import { saveSocialLinks } from "@/app/actions";
import { PlatformBaseUrls, PlatformIcons } from "@/utils/platformTypes";
import { validateUsernames } from "@/utils/validator";
import { useEffect, useState } from "react";

type Usernames = {
  [key: string]: string;
};

export function useUsernamesValidation(selectedTypes: string[]) {
  const [socialLinks, setSocialLinks] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<{ [key: string]: string } | null>(null);

  useEffect(() => {
    const initialUsernames: Record<string, string> = {};
    selectedTypes.forEach((type) => {
      initialUsernames[type] = ""; // Set initial value as an empty string or default value
    });
    setSocialLinks(initialUsernames);
  }, [selectedTypes]);

  const handleChange = (name: string, value: string) => {
    setSocialLinks((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    const validationErrors = validateUsernames(socialLinks);
    if (validationErrors) {
      setErrors(validationErrors);
    } else {
      setErrors(null);

      await saveSocialLinks(socialLinks);
    }
  };

  return {
    socialLinks,
    errors,
    handleChange,
    handleSubmit,
  };
}
