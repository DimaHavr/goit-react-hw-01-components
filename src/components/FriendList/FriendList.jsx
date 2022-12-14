const FriendList = ({ friends }) => {
   return (
     <ul className="friend-list">
{friends.map(({ avatar, name, isOnline, id }) => (
         <li key={id} className="item">
  {isOnline && <span className="status"></span>}
  <img className="avatar" src={avatar} alt="User avatar" width="48" />
              <p className={ name}></p>
</li>
      ))}
</ul>)
}

export default FriendList
