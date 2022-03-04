/**
 * date: 2022-03-4, Fri, 10:20
 * author: TooZhun9
 * feature： Project Whole Layout Page
 */

import React, { useState } from 'react';

import logo from '../../logo_2x.png';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Outlet, Link } from 'react-router-dom';
import routes from '../../common/routes';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const LayoutPage = () => {
  const [collapsed, setCollapse] = useState<boolean>(false);

  const onCollapse = (collapsed: boolean) => {
    setCollapse(collapsed);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <img
          src={logo}
          alt=""
          style={{ width: '30px', marginTop: '20px', marginLeft: !collapsed ? '-135px' : 0 }}
        />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          {routes.map((item) => {
            return (
              <Menu.Item key={item.key} icon={<PieChartOutlined />}>
                <Link to={item.path}>{item.name}</Link>
              </Menu.Item>
            );
          })}
          {/*<Menu.Item key="1" icon={<PieChartOutlined />}>*/}
          {/*  Option 1*/}
          {/*</Menu.Item>*/}
          {/*<Menu.Item key="2" icon={<DesktopOutlined />}>*/}
          {/*  Option 2*/}
          {/*</Menu.Item>*/}
          {/*<SubMenu key="sub1" icon={<UserOutlined />} title="User">*/}
          {/*  <Menu.Item key="3">Tom</Menu.Item>*/}
          {/*  <Menu.Item key="4">Bill</Menu.Item>*/}
          {/*  <Menu.Item key="5">Alex</Menu.Item>*/}
          {/*</SubMenu>*/}
          {/*<SubMenu key="sub2" icon={<TeamOutlined />} title="Team">*/}
          {/*  <Menu.Item key="6">Team 1</Menu.Item>*/}
          {/*  <Menu.Item key="8">Team 2</Menu.Item>*/}
          {/*</SubMenu>*/}
          {/*<Menu.Item key="9" icon={<FileOutlined />}>*/}
          {/*  Files*/}
          {/*</Menu.Item>*/}
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
};

export default LayoutPage;
