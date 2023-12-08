export const generateDate = (timestamp) => {
  const date = new Date(timestamp).toLocaleDateString();
  const [hours, minutes, seconds] = new Date(timestamp).toLocaleTimeString().split(":");
  const timeUnit = seconds?.split(" ")[1];
  return `${date} - ${hours}:${minutes} ${timeUnit}`;
};