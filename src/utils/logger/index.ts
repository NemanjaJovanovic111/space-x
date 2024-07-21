const Logger: LoggerProps = Object.create({
  log: (message: string) => {
    if (__DEV__) {
      console.log(message);
      return;
    }
    // TODO log to third party service
  },
  warn: (message: string) => {
    if (__DEV__) {
      console.warn(message);
      return;
    }
    // TODO log to third party service
  },
  error: (message: string) => {
    if (__DEV__) {
      console.error(message);
      return;
    }
    // TODO log to third party service
  },
});

export default Logger;
