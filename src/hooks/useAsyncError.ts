import { useState, useCallback } from "react";
import { AxiosError } from "axios";

export default () => {
  const [_, setError] = useState();
  return useCallback(
    (error: AxiosError) => {
      setError(() => {
        throw error;
      });
    },
    [setError]
  );
};
