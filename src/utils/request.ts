
import axios from "axios";

// NOTE: Should be used only for testing
const sleep = (duration: number) => {
  return new Promise((res) => setTimeout(res, duration, "done sleeping"));
};

export const axiosGet = async (url: string) => {
  await sleep(3000);

  const response = await axios.get(url);
  return response.data;
};