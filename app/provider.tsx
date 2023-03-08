"use client";

import { queryClient } from "@src/libs/reactQuery";
import { PropsWithChildren, useState } from "react";
import { QueryClientProvider } from "react-query";

export default function ReactQueryProvider({ children }: PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
