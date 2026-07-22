import type React from "react";
import type { ChangeEvent } from "react";
import { Button } from "./ui";
import { Input, Select } from "antd";
import { StatusOptions } from "../types/tasks.types";
import type { SearchParams } from "../types/searchParams.types";

export function FilterBox(): React.ReactNode {
  return;
}

interface SearchPanelProps extends SearchParams {
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  openTaskForm: () => void;
}

export function SearchPanel({
  search,
  onInputChange,
  openTaskForm,
}: SearchPanelProps): React.ReactNode {
  return (
    <div className="flex justify-between">
      <div id="inputs" className="flex gap-4 grow">
        <Input
          name="search-input"
          placeholder="Search task"
          value={search}
          onChange={onInputChange}
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
        <Button type="primary" onClick={openTaskForm}>
          + Nueva tarea
        </Button>
      </div>
    </div>
  );
}
