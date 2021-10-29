// @flow
import "antd/dist/antd.css";
import { Layout } from "antd";
import { CalendarMain } from "./components/CalendarMain";

const { Header, Content } = Layout;

const App = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header></Header>
      <Content>
        <CalendarMain />
      </Content>
    </Layout>
  );
};

export default App;
