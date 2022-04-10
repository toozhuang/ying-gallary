import React from 'react';
import { PieChartOutlined, SettingOutlined } from '@ant-design/icons';

/**
 * date: 2022-03-4, Fri, 10:59
 * author: TooZhun9
 * feature： 全局 route 配置
 */

const routes = [
  {
    path: '/gallery',
    key: 'gallery',
    name: 'Gallery',
    icons: <PieChartOutlined />,
    display: true,
  },
  {
    path: '/gallery/:id',
    key: 'gallery-detail',
    name: 'GalleryDetail',
    display: false,
  },
  {
    path: '/s-list',
    key: 'setting',
    name: 'Setting',
    icons: <SettingOutlined />,
    display: true,
    hasSubMenu: true,
    subMenus: [
      {
        path: '/s-list',
        key: 'setting-list',
        name: '列表管理',
        icons: <SettingOutlined />,
        display: true,
      },
    ],
  },
];

export default routes;
