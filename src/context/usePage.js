import { useContext } from "react";
import { PageContext } from "./PageContext";

export const usePage = () => useContext(PageContext);
