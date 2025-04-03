export const throttle = <T extends (...args: any[]) => any>(
  fn: T,
  delay: number
) => {
  let lastCall = 0;
  return function (this: any, ...args: Parameters<T>) {
    const now = new Date().getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return fn.apply(this, args);
  };
};
