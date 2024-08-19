import { cookies } from "next/headers";
import { useEffect, useState } from "react";

interface LinkFormData {
  userName?: string;
  platforms?: string[];
  socialLinks?: { platform: string; url: string }[];
  profileName?: string;
  description?: string;
  imageUrl?: string;
}

const COOKIE_NAME = "link_form_data";

export function useLinkFormData() {
  const [formData, setFormData] = useState<LinkFormData>({});

  useEffect(() => {
    const savedData = cookies().get(COOKIE_NAME)?.value;
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        setFormData(parsedData);
      } catch (error) {
        console.error("Error parsing saved form data:", error);
        // Cookies.remove(COOKIE_NAME);
      }
    }
  }, []);

  const updateFormData = (newData: Partial<FormData>) => {
    const updatedData = { ...formData, ...newData };
    setFormData(updatedData);
    cookies().set(COOKIE_NAME, JSON.stringify(updatedData), { expires: 1 }); // Expires in 1 day
  };

  const clearFormData = () => {
    setFormData({});
    cookies().delete(COOKIE_NAME);
  };

  return { formData, updateFormData, clearFormData };
}
