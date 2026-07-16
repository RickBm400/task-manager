import { useState, type ReactNode } from "react";
import { Drawer } from "antd";

export default function SideDrawer(props: { children: ReactNode }) {
  const [openDrawer, setOpenDrawer] = useState<boolean>(true);

  return (
    <>
      <Drawer
        title="Create new task"
        placement="right"
        open={openDrawer}
        size={530}
      >
        {props.children}
      </Drawer>
    </>
  );
}
