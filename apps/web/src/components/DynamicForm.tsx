import type { Priority } from "@repo/task-manager-types";
import { Form, Input, Select, type SelectProps } from "antd";
import PriorityBadge from "./PriorityBadge";
import { StatusOptions } from "../types/tasks.styles";

type LabelRender = SelectProps["optionRender"];

export default function DynamicForm() {
  const [form] = Form.useForm();

  const customLabelBadge: LabelRender = (option) => {
    const { value } = option.data;

    return <PriorityBadge priority={value as Priority} />;
  };

  return (
    <Form form={form} layout="vertical">
      <Form.Item label="Title">
        <Input placeholder="Add Task Title" type="text" />
      </Form.Item>

      <Form.Item label="Piority" className="w-1/3">
        <Select
          placeholder="Task Priority"
          options={StatusOptions}
          optionRender={customLabelBadge}
        />
      </Form.Item>

      <Form.Item label="Description">
        <Input.TextArea
          rows={5}
          placeholder="Task description"
        ></Input.TextArea>
      </Form.Item>
    </Form>
  );
}
