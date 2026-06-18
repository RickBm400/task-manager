import PriorityBadge from "./PriorityBadge";
import type { Priority } from "@repo/task-manager-types";

export default function TaskCard(props: { priority: Priority }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Revisar banners</h3>
        <PriorityBadge priority={props.priority}></PriorityBadge>
      </div>

      <div className="w-full bg-gray-200 rounded border border-gray-300 mt-4 px-4 py-2">
        <span className="text-gray-600 break-after-all">
          some text Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Suscipit beatae perspiciatis autem, maxime repellendus nostrum soluta
          omnis abaut inventore commodi? Animi, voluptates. Eos hic incidunt
          illum ad. Doloribus, omnis?
        </span>
      </div>
      <span className="text-sm text-gray-500">
        Fecha de creación: 2024-06-01
      </span>
    </div>
  );
}
