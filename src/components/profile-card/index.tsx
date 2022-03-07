/**
 * date: 2022-03-7, Mon, 22:4
 * author: TooZhun9
 * feature： 电影人员头像 card
 */

import React from 'react';
import { Card } from 'antd';

import './profile-card.scss';

const { Meta } = Card;

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
  return (
    <div className="profile-card">
      <Card
        hoverable
        bordered={false}
        style={{ width: 120 }}
        cover={<img alt="example" src={props.profile.thumb} />}
      >
        <Meta title={props.profile.name} description={props.profile.role} />
      </Card>
    </div>
  );
};

export default ProfileCard;
