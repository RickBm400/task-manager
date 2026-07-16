import { type ReactNode } from "react";
import { Drawer } from "antd";

type SideDrawerProp = {
  title?: string;
  open: boolean;
  onClose: Function;
} & {
  children: ReactNode;
};

export default function SideDrawer({
  children,
  title = "",
  open = false,
  onClose,
}: SideDrawerProp) {
  return (
    <Drawer
      title={title}
      placement="right"
      open={open}
      size={530}
      onClose={() => onClose()}
    >
      {children}
    </Drawer>
  );
}
