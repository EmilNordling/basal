export function getResponsiveClassName<T extends string>(
  size: getResponsiveClassName.Size<T>,
  target: string
): string {
  if (typeof size === "object") {
    const prefixes = [];

    prefixes.push(`${target}${size.initial}`);
    if ("small" in size) prefixes.push(`sm\:${target}${size.small}`);
    if ("medium" in size) prefixes.push(`md\:${target}${size.medium}`);
    if ("large" in size) prefixes.push(`lg\:${target}${size.large}`);
    if ("xl" in size) prefixes.push(`xl\:${target}${size.xl}`);
    if ("2xl" in size) prefixes.push(`\/2xl\:${target}${size["2xl"]}`);

    return prefixes.join(" ");
  }

  return target + size;
}

export namespace getResponsiveClassName {
  export type Size<T extends string> = T | Record<T>;

  export type Record<T extends string> = {
    initial: T;
    small?: T;
    medium?: T;
    large?: T;
    xl?: T;
    "2xl"?: T;
  };
}
