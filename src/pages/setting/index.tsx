/**
 * date: 2022-04-10, Sun, 20:29
 * author: Wang
 * feature： 设置页，
 */
import * as React from 'react';

type Props = {
  name: string;
};
export const Setting = (props: Props) => {
  const { name } = props;
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};
