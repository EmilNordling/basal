export function isSomeError(value: unknown): value is Error {
  return (
    value instanceof Error ||
    value instanceof ErrorEvent ||
    value instanceof DOMException ||
    // Might need a pollyfill...
    // value instanceof AggregateError ||
    value instanceof EvalError ||
    value instanceof RangeError ||
    value instanceof ReferenceError ||
    value instanceof SyntaxError ||
    value instanceof TypeError ||
    value instanceof URIError
  );
}
