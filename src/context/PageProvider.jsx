import { useState } from "react";
import { PageContext } from "./PageContext";

export default function PageProvider({ children }) {
  const [pageIndex, setPageIndex] = useState(0);

  const pages = ["/", "/login", "/signup", "/profile"];

  const goNext = () => {
    if (pageIndex < pages.length - 1) {
      setPageIndex((p) => p + 1);
    }
  };

  const goPrev = () => {
    if (pageIndex > 0) {
      setPageIndex((p) => p - 1);
    }
  };

  const goHome = () => setPageIndex(0);

  return (
    <PageContext.Provider
      value={{ pages, pageIndex, goNext, goPrev, goHome }}
    >
      {children}
    </PageContext.Provider>
  );
}
