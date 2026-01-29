export const getNumberArray = (num: number | undefined): number[] => {
  if (!num) return [];
  const array = Array.from(String(num), Number);
  return array;
};
