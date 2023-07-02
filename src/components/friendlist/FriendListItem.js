import PropTypes from 'prop-types';

import { FriendStatus, FriendAvatar, FriendName } from './FriendList.styled';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <>
      <FriendStatus isOnline={isOnline}></FriendStatus>
      <FriendAvatar src={avatar} alt="User avatar" width="60" />
      <FriendName>{name}</FriendName>
    </>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
