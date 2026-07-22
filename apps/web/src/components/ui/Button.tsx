import { Button } from "antd";
import type { ButtonType } from "antd/es/button";

export default function ButtonComponent(props: {
  onClick?: () => void;
  children?: React.ReactNode;
  type?: ButtonType;
  className?: string;
}) {
  return (
    <Button
      type={props.type}
      onClick={props.onClick}
      className={props.className}
    >
      {props.children}
    </Button>
  );
}
