import { useState } from "react";
import type { SearchParams } from "../types/searchParams.types";

export default function useSearchParams() {
  const [params, setParams] = useState<SearchParams>({
    search: "",
    priority: "LOW",
    page: 1,
    limit: 10,
  });

  return {
    params,
    setParams,
  };
}
