import { Layout, Menu } from "antd";
import { NavLink } from "react-router-dom";

const { Sider } = Layout;

const sidebarItems = ["Products"].map((label, index) => ({
  key: String(index + 1),
  label: <NavLink to="/">{label}</NavLink>,
}));

const Sidebar = () => {
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      style={{
        height: "100vh",
      }}
    >
      <Menu
        style={{ marginTop: "62px", paddingLeft: "8px", paddingRight: "8px" }}
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarItems}
      />
    </Sider>
  );
};

export default Sidebar;
