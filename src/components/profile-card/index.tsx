/**
 * date: 2022-03-7, Mon, 22:4
 * author: TooZhun9
 * feature： 电影人员头像 card
 */

import React from 'react';

interface IProfile {
  name: string;
  profile: string;
  role: string;
  thumb: string;
}

interface IProfileCard {
  profile: IProfile;
}

const ProfileCard = (props: IProfileCard) => {
  return <div>aoao</div>;
};

export default ProfileCard;
