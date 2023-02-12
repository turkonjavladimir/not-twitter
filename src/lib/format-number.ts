export function formatNumber(value: string) {
  const length = (Math.abs(parseInt(value, 10)) + "").length;
  const index = Math.ceil((length - 3) / 3);
  const suffix = ["K", "M", "B", "T"];

  if (length < 4) return value;

  return (
    (Number(value) / Math.pow(1000, index)).toFixed(1).replace(/\.0$/, "") +
    suffix[index - 1]
  );
}
