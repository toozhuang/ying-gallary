/**
 * date: 2023-02-15, Wed, 9:59
 * author: Wang
 * feature： 用来全局控制 path 下的权限
 */

import React, { useEffect } from 'react';
import { createStructuredSelector } from 'reselect';
import { makeIsLoggedSelector } from '../../store/selectors';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Common from '../../utils/common';
import { SUCCESS_REDIRECT } from '../../common/constants/routerContant';

/**
 * 获取一个全局的 selector中登录状态的 selector， 在这个组件中使用就够了
 * 注意，这个只是一个方法， 真正的使用是在  useSelector 中使用才可以
 */
const stateSelector = createStructuredSelector({
  isLogged: makeIsLoggedSelector(),
});

const PublicRoute = (props: any) => {
  // 添加一些登录的方法
  const navigate = useNavigate();
  const { isLogged } = useSelector(stateSelector);
  const { children } = props;

  useEffect(() => {
    if (isLogged) {
      const redirectUrl = Common.getParameterByName('path') || SUCCESS_REDIRECT;
      navigate(redirectUrl);
    }
  }, [isLogged]);

  if (isLogged === null) {
    // todo: 这里可以添加一个 loading 的组件
    return <div>loading</div>;
  }

  return <div>{children}</div>;
};

export default PublicRoute;
