import { Button } from "antd";
import type { ButtonType } from "antd/es/button";

export default function ButtonComponent(props: {
  onClick?: () => void;
  children?: React.ReactNode;
  type?: ButtonType;
}) {
  return (
    <Button type={props.type} onClick={props.onClick}>
      {props.children}
    </Button>
  );
}
