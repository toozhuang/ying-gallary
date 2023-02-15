/**
 * date: 2023-02-15, Wed, 10:6
 * author: Wang
 * feature： 一些全局使用的方法
 */
export default class Common {
  /**
   * 获取 url 中的参数
   * @param name
   * @param url
   */
  static getParameterByName(name: string, url?: string) {
    if (!url) url = window.location.href;
    name = name.replace(/[[\]]/g, '\\$&');
    const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }
}
