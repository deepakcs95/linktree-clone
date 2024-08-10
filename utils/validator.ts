import { z, ZodError } from "zod";

const dynamicUserSchema = z.record(z.string().min(5, "Value must be at least 5 characters long"));

export function validateUsernames(data: Record<string, string>): { [key: string]: string } | null {
  try {
    // Validate the data
    dynamicUserSchema.parse(data);
    console.log("Validation successful!");
    return null;
  } catch (error) {
    if (error instanceof ZodError) {
      // Capture and handle errors
      const errors = error.errors;

      // Create an array of error objects

      const errorObject: { [key: string]: string } = {};

      errors.forEach((err) => {
        if (err.path.length > 0) {
          const key = err.path[0] as string;
          const errorMessage = err.message;

          // Add to the error object
          errorObject[key] = errorMessage;
        }
      });

      //   console.log("Validation failed with errors:", errorArray);
      return errorObject;
    } else {
      console.error("Unexpected error:", error);
      return null;
    }
  }
}
