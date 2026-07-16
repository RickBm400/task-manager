import type { Priority } from "@repo/task-manager-types";

const TaskStatus = {
  CRITIC: {
    name: "Critic",
    color: "bg-red-200",
    textColor: "text-red-900",
  },
  HIGH: {
    name: "High",
    color: "bg-orange-200",
    textColor: "text-orange-900",
  },
  MEDIUM: {
    name: "Medium",
    color: "bg-yellow-200",
    textColor: "text-yellow-700",
  },
  LOW: {
    name: "Low",
    color: "bg-blue-200",
    textColor: "text-blue-900",
  },
} as const;

export default function PriorityBadge(props: { priority: Priority }) {
  return (
    <div
      className={`px-2 py-1 rounded ${TaskStatus[props.priority].color} ${TaskStatus[props.priority].textColor} font-bold text-sm`}
    >
      <span>{TaskStatus[props.priority].name}</span>
    </div>
  );
}
