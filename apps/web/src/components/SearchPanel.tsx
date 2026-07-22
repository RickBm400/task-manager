import type React from "react";
import { Button } from "./ui";
import { Input, Select } from "antd";
import { StatusOptions } from "../types/tasks.styles";

export function FilterBox(): React.ReactNode {
  return;
}

export function SearchPanel(): React.ReactNode {
  return (
    <div className="flex justify-between">
      <div id="inputs" className="flex gap-4 grow">
        <Input
          name="search-input"
          placeholder="Search task"
          style={{
            width: "70%",
          }}
        />
        <Select
          placeholder="Priority"
          options={StatusOptions}
          style={{
            width: "30%",
          }}
        />
      </div>
      <div id="action-create" className="w-1/3 flex justify-end">
        <Button type="primary">+ Nueva tarea</Button>
      </div>
    </div>
  );
}
