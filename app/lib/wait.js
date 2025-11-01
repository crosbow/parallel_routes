const wait = (millisecond) => {
  return new Promise((resolve) => {
    setInterval(() => {
      resolve();
    }, millisecond);
  });
};
export default wait;
