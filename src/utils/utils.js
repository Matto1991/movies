export const convertDurationToHoursMinutes = (totalMinutes) => {
  const minutes = totalMinutes % 60;
  const hours = (totalMinutes - minutes) / 60;
  const output = hours + ":" + minutes;
  return output;
};
