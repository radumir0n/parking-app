export const getTime = (): string => {
  const date = new Date();
  const utc = date.toJSON().slice(0, 10).replace(/-/g, "/");
  const time =
    utc +
    "-" +
    `0${date.getHours()}`.slice(-2) +
    ":" +
    `0${date.getMinutes()}`.slice(-2) +
    ":" +
    `0${date.getSeconds()}`.slice(-2);
  return time;
};

export const getDuration = (duration: number) => {
  const seconds = `0${Math.floor(duration % 60)}`.slice(-2);
  const minutes = `0${Math.floor((duration / 60) % 60)}`.slice(-2);
  const hours = `0${Math.floor(duration / 3600)}`.slice(-2);

  const time = `${hours}:${minutes}:${seconds}`;

  return time;
};
