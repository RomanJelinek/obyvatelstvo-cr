export const getFormattedValue = (
  value: string | number,
  isRelative?: boolean
) => {
  return Number(value)
    .toLocaleString(undefined, {
      style: isRelative ? 'percent' : 'decimal',
      maximumFractionDigits: 2,
    })
    .replaceAll(',', ' ');
};
