import { type ReactNode } from "react";
import { Drawer } from "antd";

type SideDrawerProp = {
  title?: string;
  open: boolean;
  onClose: Function;
  extra: ReactNode;
} & {
  children: ReactNode;
};

export default function SideDrawer({
  children,
  title = "",
  open = false,
  onClose,
  extra,
}: SideDrawerProp) {
  return (
    <Drawer
      title={title}
      placement="right"
      open={open}
      size={530}
      extra={extra}
      onClose={() => onClose()}
    >
      {children}
    </Drawer>
  );
}
