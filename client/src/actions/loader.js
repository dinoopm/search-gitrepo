export function setLoader(isLoading) {
  return {
    type: "SET_LOADER",
    payload: { isLoading }
  };
}
