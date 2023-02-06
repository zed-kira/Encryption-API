// React
import React, { useState } from 'react';

// React Router
import { Routes, Route } from "react-router-dom";

// Ant Design
import { Layout, theme, Menu } from 'antd';

// Global Components
import Sidebar from './scenes/global/Sidebar';
import Navbar from './scenes/global/Navbar';

// Pages Components
import Encrypt from './scenes/encrypt';
import Decrypt from './scenes/decrypt';
import Docs from './scenes/docs';
import Settings from './scenes/settings';

// Styling 
import './App.css';

const { Header, Content, Footer, Sider } = Layout;

function App() {

  const [collapsed, setCollapsed] = useState(false);

  const [dark, setMode] = useState(true);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [content, setContent] = useState(<Encrypt colorBgContainer={colorBgContainer} />);

  const handleMenuClick = (e) => {

    const content = [
      <Encrypt colorBgContainer={colorBgContainer} />,
      <Decrypt colorBgContainer={colorBgContainer} />,
      <Docs colorBgContainer={colorBgContainer} />, 
      <Settings colorBgContainer={colorBgContainer} />,
    ]

    setContent(content[e.key]);
  }

  return (
      <>
        <Layout hasSider>
          <Sidebar collapsed={collapsed} handleMenuClick={handleMenuClick} dark={dark} />
          <Layout
            className="site-layout"
            style={{
              marginLeft: collapsed ? 80 : 200,
            }}
          >
            <Navbar collapsed={collapsed} setCollapsed={setCollapsed} colorBgContainer={colorBgContainer} dark={dark} setMode={setMode} />
            {content}
            <Footer style={{ textAlign: 'center' }}>Copyright &copy; {new Date().getFullYear()} Zedkira. All rights reserved.</Footer>
          </Layout>
        </Layout>
      </>
  );
}

export default App;
