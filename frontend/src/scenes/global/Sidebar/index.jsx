// React
import React, { useState } from 'react';

// React Router
import { Link } from 'react-router-dom';

// Ant Design
import { Layout, Menu } from 'antd';
import { Typography } from 'antd';

// Ant Design Icons
import {
    FileTextOutlined,
    LockOutlined,
    UnlockOutlined,
    SettingOutlined,
    DashboardOutlined,
} from '@ant-design/icons';
import {
    AppstoreOutlined,
    BarChartOutlined,
    CloudOutlined,
    ShopOutlined,
    TeamOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
  } from '@ant-design/icons';

// LOGO 
import logo from '../../../assets/images/logo.png';

const { Title } = Typography;

const { Sider } = Layout;

const Sidebar = (props) => {

    const items = [
        UserOutlined,
        VideoCameraOutlined,
        UploadOutlined,
        BarChartOutlined,
        CloudOutlined,
        AppstoreOutlined,
        TeamOutlined,
        ShopOutlined,
      ].map((icon, index) => ({
        key: String(index + 1),
        icon: React.createElement(icon),
        label: `nav ${index + 1}`,
    }));

    const { collapsed, handleMenuClick, dark } = props;

    return (
        <>

            <Sider
                trigger={null} 
                collapsible 
                collapsed={collapsed}
                style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    bottom: 0,
                }}
                theme={dark ? 'dark' : 'light'}
            >
                {/* <div
                    style={{
                        height: 32,
                        margin: 16,
                        background: 'rgba(255, 255, 255, 0.2)',
                    }}
                >
                
                </div> */}
                {/* <Menu theme={dark ? "dark" : "light"} mode="inline" defaultSelectedKeys={['4']} items={items} /> */}
                <Menu
                    id='logoMenuItem'
                    theme={dark ? 'dark' : 'light'}
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    style={{ marginTop: 10 }}
                    items={[
                        {
                            key: '1',
                            icon: <img style={ collapsed ? { marginTop: 10, marginLeft: -10 } : { marginTop: 3 }} width={30} height={30} src={logo}/>, /* <DashboardOutlined /> */
                            label: 'Zedkira',
                            style: { backgroundColor: 'transparent' },
                        },
                    ]}
                     
                />
                
                <Menu
                    onClick={(e) => handleMenuClick(e)}
                    style={{ marginTop: 40 }}
                    theme={dark ? 'dark' : 'light'}
                    mode="inline"
                    defaultSelectedKeys={['0']}
                    items={[
                        {
                            key: '0',
                            icon: <LockOutlined />,
                            label: 'Encrypt',
                        },
                        {
                            key: '1',
                            icon: <UnlockOutlined />,
                            label: 'Decrypt',
                        },
                        {
                            key: '2',
                            icon: <FileTextOutlined />,
                            label: 'API Docs',
                        },
                        {
                            key: '3',
                            icon: <SettingOutlined />,
                            label: 'Settings',
                        },
                    ]}
                />
            </Sider>
        
            {/* <Sider 
                theme={dark ? 'dark' : 'light'} 
                trigger={null} 
                collapsible 
                collapsed={collapsed}
                style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    bottom: 0,
                }}
            >
                <Menu
                    id='logoMenuItem'
                    theme={dark ? 'dark' : 'light'}
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    style={{ marginTop: 10 }}
                    items={[
                        {
                            key: '1',
                            icon: <DashboardOutlined />,
                            label: 'Zedkira',
                            style: { backgroundColor: 'transparent' },
                        },
                    ]}
                />
                <Menu
                    onClick={(e) => handleMenuClick(e)}
                    style={{ marginTop: 20 }}
                    theme={dark ? 'dark' : 'light'}
                    mode="inline"
                    defaultSelectedKeys={['0']}
                    items={[
                        {
                            key: '0',
                            icon: <LockOutlined />,
                            label: 'Encrypt',
                        },
                        {
                            key: '1',
                            icon: <UnlockOutlined />,
                            label: 'Decrypt',
                        },
                        {
                            key: '2',
                            icon: <FileTextOutlined />,
                            label: 'API Docs',
                        },
                        {
                            key: '3',
                            icon: <SettingOutlined />,
                            label: 'Settings',
                        },
                    ]}
                />
            </Sider> */}

        </>
    )

}

export default Sidebar;