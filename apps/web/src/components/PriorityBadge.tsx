import type { Priority } from "../types/Task.types";

const TaskStatus = {
  CRITIC: {
    name: "Crítica",
    color: "bg-red-200",
    textColor: "text-red-900",
  },
  HIGH: {
    name: "Alta",
    color: "bg-orange-200",
    textColor: "text-orange-900",
  },
  MEDIUM: {
    name: "Media",
    color: "bg-yellow-200",
    textColor: "text-yellow-700",
  },
  LOW: {
    name: "Baja",
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
