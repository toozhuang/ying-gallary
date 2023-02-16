import React, { useEffect } from 'react';
import AuthPage from '../../components/auth';
import { fetchUserById } from '../../store/services/toshl/sclide';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { createStructuredSelector } from 'reselect';
import { makeIsLoggedSelector } from '../../store/selectors';

const Login = () => {
  const user = useSelector((state: RootState) => state.users);
  const test = useSelector(createStructuredSelector({ isLogged: makeIsLoggedSelector() }));

  // console.log('test: ', test);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserById(3));
  }, []);

  // console.log('my user: ', user);

  return (
    <AuthPage>
      <div>I am login window</div>
    </AuthPage>
  );
};
Login.propTypes = {};

export default Login;
