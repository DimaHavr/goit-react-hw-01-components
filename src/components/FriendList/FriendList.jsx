import PropTypes from 'prop-types';
import { List, Item, StatusOn, StatusOff } from './FriendList.styled';

const FriendList = ({ friends }) => (
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
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
};

export default FriendList;
