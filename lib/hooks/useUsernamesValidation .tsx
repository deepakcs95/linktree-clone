import { saveSelectedUserNames } from "@/app/actions";
import { validateUsernames } from "@/utils/validator";
import { useEffect, useState } from "react";

type Usernames = {
  [key: string]: string;
};

export function useUsernamesValidation(selectedTypes: string[]) {
  const [usernames, setUsernames] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<{ [key: string]: string } | null>(null);

  useEffect(() => {
    const initialUsernames: Record<string, string> = {};
    selectedTypes.forEach((type) => {
      initialUsernames[type] = ""; // Set initial value as an empty string or default value
    });
    setUsernames(initialUsernames);
  }, [selectedTypes]);

  const handleChange = (name: string, value: string) => {
    setUsernames((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    const validationErrors = validateUsernames(usernames);
    if (validationErrors) {
      setErrors(validationErrors);
    } else {
      setErrors(null);
      await saveSelectedUserNames(usernames);
      // Proceed with form submission or other logic
    }
  };

  return {
    usernames,
    errors,
    handleChange,
    handleSubmit,
  };
}
