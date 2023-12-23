import css from './friendlist.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.friendListItem}>
      <span
        className={isOnline ? css.isonline : `${css.isonline} ${css.isoffline}`}
      ></span>
      <img className={css.avatar} src={avatar} alt="User avatar" />
      <p className={css.username}>{name}</p>
    </li>
  );
};

export default FriendListItem;
