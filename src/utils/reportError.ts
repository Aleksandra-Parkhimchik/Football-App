import { AxiosError } from "axios";

export default (error: AxiosError) => {
  const { code, message } = error;

  if (!code || !message) {
    console.error("An unknown error occurred");

    return null;
  }

  console.error(`Error code: ${code}, message: ${message}`);
};
