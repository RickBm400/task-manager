import type { Priority } from "@repo/task-manager-types";

export interface SelectOptions {
  value: Priority;
  label: string;
  disabled?: boolean;
}

export const StatusOptions: SelectOptions[] = [
  { value: "CRITIC", label: "Critic" },
  { value: "HIGH", label: "High" },
  { value: "MEDIUM", label: "Medium" },
  { value: "LOW", label: "Low" },
];
