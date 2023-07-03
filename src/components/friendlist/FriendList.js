import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import { FriendListStyle, FriendListItemStyle } from './FriendList.styled';

export default function FriendList({ friends }) {
  return (
    <FriendListStyle>
      {friends.map(friend => (
        <FriendListItemStyle key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </FriendListItemStyle>
      ))}
    </FriendListStyle>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array(
    PropTypes.shape({
      id: PropTypes.number,
    })
  ),
};
