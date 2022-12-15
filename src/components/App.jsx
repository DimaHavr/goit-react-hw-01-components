import PropTypes from 'prop-types';

import user from 'json/user.json';
import data from 'json/data.json';
import friends from 'json/friends.json';
import transactions from 'json/transactions.json';

import FriendList from './FriendList/FriendList';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import TransactionHistory from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

App.propTypes = {
  data:PropTypes.array,
  title: PropTypes.string,
  friends: PropTypes.array,
  transactions: PropTypes.array,
};
