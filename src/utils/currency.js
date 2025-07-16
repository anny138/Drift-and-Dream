export const formatINR= (amount) => {
  if (!amount || isNaN(amount)) return "$0.00";
  return `$${Number(amount).toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })}`;
};
