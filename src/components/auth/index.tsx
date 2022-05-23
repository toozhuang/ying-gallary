/**
 * date: 2022-03-4, Fri, 10:20
 * author: TooZhun9
 * feature： Project Whole Layout Page
 */

import React, { ReactChild, ReactFragment, ReactPortal } from 'react';
import { Layout } from 'antd'; //Breadcrumb

const { Content, Footer } = Layout;

type ReactNode = ReactChild | ReactFragment | ReactPortal | boolean | null | undefined;

const AuthPage = (props: { children: ReactNode }) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout className="site-layout">
        <Content style={{ margin: '0 0' }}>
          <div className="site-layout-background" style={{ padding: 0, minHeight: 360 }}>
            {props.children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
};

export default AuthPage;
