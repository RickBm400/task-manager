import PriorityBadge from "./PriorityBadge";
import type { Task } from "@repo/task-manager-types";

export default function TaskCard(props: { task: Task }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">{props.task.title}</h3>
        <PriorityBadge priority={props.task.priority} />
      </div>

      <div className="w-full bg-gray-200 rounded border border-gray-300 mt-4 px-4 py-2">
        <span className="text-gray-600 break-after-all">
          {props.task.description}
        </span>
      </div>
      <span className="text-sm text-gray-500">
        {/* TODO: Implement moment ts for parse dates */}
        Fecha de creación: {props.task.createdAt.toISOString()}
      </span>
    </div>
  );
}
