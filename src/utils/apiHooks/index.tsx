import { useRef, useState } from "react";
import { errorHandler } from "@/utils/errorHandler";
import Router from "next/router";
import logOut from "../auth/logOut";

type ExecuteConfig = {
  onError?: (error: any) => void;
};

export type RefreshConfig = {
  shouldRefresh?: boolean;
};

export const useApi = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const isFetching = useRef(false);

  async function execute(
    callback: () => Promise<any>,
    config?: ExecuteConfig
  ) {
    if (!isFetching.current) {

      try {
        isFetching.current = true;

        setIsLoading(true);
        setError(null);
        let apiCall = await callback();
        if (apiCall?.success) {
          return apiCall;
        } else {
          if (apiCall.statusCode == 401) {
            setError(apiCall?.message)
            logOut();
            window.location.href = "/auth/signin";
          } else {
            setError(apiCall?.message)
          }
        }
      } catch (error: any) {
        const parsedError = errorHandler(error)
        if (parsedError.statusCode == 401) {
          setError(parsedError.message)
          logOut();
          window.location.href = "/auth/signin";
        } else {
          setError(parsedError.message)
        }
      } finally {
        setIsLoading(false);
        isFetching.current = false;
      }
    }
  }

  return { isLoading, error, execute };
};
