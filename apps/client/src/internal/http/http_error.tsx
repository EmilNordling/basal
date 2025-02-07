import type { HttpStatusCode } from './http.service';

/**
 * Error to check
 *
 * ```tsx
 * try {
 * 	await Http.get('https://api.api.com');
 * } catch (error: unknown) {
 * 	if (error instanceof HttpError) {
 *			// We know how to handle the error
 * 	}
 *
 * 	throw error;
 * }
 * ```
 */
export class HttpError<E> extends Error {
  constructor(
    public readonly message: string,
    public readonly statusCode: HttpStatusCode,
    public readonly data: E,
  ) {
    super(message);
    this.name = 'HttpError';
    Object.setPrototypeOf(this, HttpError.prototype);
  }
}

/**
 * Will assert that an unknown symbol is actually shaped as an HttpError so it
 * may be casted as such
 */
export function isHttpError<T>(error: unknown): error is HttpError<T> {
  if (error instanceof HttpError) {
    return true;
  }

  return false;
}
