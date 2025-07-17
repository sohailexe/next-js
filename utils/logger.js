function logger(useSWRNext) {
  return (key, fetcher, config) => {
    const extendedFetcher = (...args) => {
      console.log("Fetching data for key:", key);
      console.log("With arguments:", args);
      return fetcher(...args);
    };
    return useSWRNext(key, extendedFetcher, config);
  };
}
export default logger;
