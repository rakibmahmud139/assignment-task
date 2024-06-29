import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const { Header, Content } = Layout;

const MainLayouts = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Sidebar />
      <Layout>
        <Header
          className=" flex justify-end pt-4"
          style={{
            position: "sticky",
            top: 0,
          }}
        ></Header>
        <Content
          className="bg-gradient-to-r from-cyan-900 via-purple-900 to-slate-900 "
          style={{ overflow: "auto" }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayouts;
