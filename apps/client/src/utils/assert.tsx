export function assertIsDefined<T>(
  condition: T,
  message?: string
): asserts condition is NonNullable<T> {
  if (!condition) {
    throw new Error(message ?? "Expected value to be defined");
  }
}
