import PropTypes from 'prop-types';
import { List, Item, StatusOn, StatusOff } from './FriendList.styled';

export const FriendList = ({ friends }) => (
  <List>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <Item key={id}>
        {isOnline ? (
          <StatusOn>Online</StatusOn>
        ) : (
          <StatusOff>Offline</StatusOff>
        )}
        <img src={avatar} alt="User avatar" width="48" />
        <p>{name}</p>
      </Item>
    ))}
  </List>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    }),
  ),
};
