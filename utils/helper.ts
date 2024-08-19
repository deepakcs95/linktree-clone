type AsyncFunction<T, R> = (arg: T) => Promise<R>;

export function withErrorHandling<T, R>(fn: AsyncFunction<T, R>) {
  return async (arg: T): Promise<{ success: boolean; data?: R; error?: string }> => {
    try {
      const result = await fn(arg);
      return { success: true, data: result };
    } catch (error) {
      console.error(`Error in operation:`, error);
      return { success: false, error: (error as Error).message || "An unknown error occurred" };
    }
  };
}
