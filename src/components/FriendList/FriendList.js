import PropTypes from 'prop-types';
import css from './FriendList.module.css';

const FriendList = ({ friends }) => (
  <ul className={css['friend-list']}>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <li key={id} className={css.item}>
        {isOnline ? (
          <span className={css['status-on']}>Online</span>
        ) : (
          <span className={css['status-off']}>Offline</span>
        )}
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
      </li>
    ))}
  </ul>
);

FriendList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
};

export default FriendList;
