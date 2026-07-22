import type { Priority } from "@repo/task-manager-types";

export interface SearchParams {
  search: string;
  priority: Priority;
  page: number;
  limit: number;
}
