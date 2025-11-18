
export class ApiError extends Error {
  status: number;
  code?: string;
  details?: unknown;

  constructor(opts: { message: string; status: number; code?: string; details?: unknown }) {
    super(opts.message);
    this.name = "ApiError";
    this.status = opts.status;
    this.code = opts.code;
    this.details = opts.details;
  }
}

// Utility: normalize any unknown error into something we can display
export function toApiError(error: unknown): ApiError {
  if (error instanceof ApiError) return error;

  if (error instanceof Error) {
    return new ApiError({
      message: error.message || "Unexpected error",
      status: 0,
    });
  }

  return new ApiError({
    message: "Unexpected error",
    status: 0,
    details: error,
  });
}
