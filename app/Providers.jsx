"use client";
import React from "react";
import { SWRConfig } from "swr";
import fetcher from "./services/fetcher";

const Providers = ({ children }) => {
  return (
    <SWRConfig
      value={{
        fetcher,
        // refreshInterval: 3000,
        // revalidateOnFocus: false,
        // revalidateOnReconnect: false,
        // shouldRetryOnError: false,
      }}
    >
      {children}
    </SWRConfig>
  );
};

export default Providers;
