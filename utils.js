export const getRandomNumber = (min = 1, max = 20) => {
  return Math.floor(
    Math.random() * (max - min + 1) + min
  );
};

export const normalizeTime = time => {
  return time < 10 ? `0${time}` : time;
}
