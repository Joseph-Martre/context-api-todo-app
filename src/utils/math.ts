/** Randomizes a number by adding between +-15% to it. Returns an integer. */
export const randomize = (num: number) => {
  const randomOffset = (Math.random() - 0.5) * 0.3;
  return Math.floor(num * (1 + randomOffset));
};
