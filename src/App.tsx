import * as React from 'react';
import './App.css';
import LayoutPage from './components/layout';

import { Button, Result } from 'antd';
import GalleryList from './pages/gallery';
import GalleryDetail from './pages/gallery/detail';
import { Setting } from './pages/setting';
import Login from './pages/login';
import { Link, Outlet, Route, Routes } from 'react-router-dom';

const BaseLayout = () => {
  return (
    <div>
      <Outlet></Outlet>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<BaseLayout></BaseLayout>}>
        <Route index element={<Login></Login>} />
        <Route path="auth/login" element={<Login></Login>} />
        <Route path="auth/register" element={<Login></Login>} />

        <Route path="/app" element={<LayoutPage />}>
          <Route index element={<div>我是什么</div>} />
          <Route path="gallery" element={<GalleryList />} />
          <Route path="gallery/:movieId" element={<GalleryDetail />} />
          <Route path="s-list" element={<Setting name={'setting'} />} />
          <Route
            path="*"
            element={
              <Result
                status="404"
                title="404"
                subTitle="页面不存在， 你说怎么访问？"
                extra={
                  <Button type="primary">
                    <Link to="/"> 返回主页面</Link>
                  </Button>
                }
              />
            }
          />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
