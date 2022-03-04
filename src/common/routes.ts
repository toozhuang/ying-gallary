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
  },
  {
    path: '/gallery/:id',
    key: 'gallery-detail',
    name: 'GalleryDetail',
  },
];

export default routes;
