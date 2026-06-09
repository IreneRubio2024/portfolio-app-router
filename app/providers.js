"use client";

import { PortfolioProvider } from "./Context/PortfolioContext";

export default function Providers({ children }) {
  return <PortfolioProvider>{children}</PortfolioProvider>;
}
