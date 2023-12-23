import css from './friendlist.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css['friend-list-item']}>
      <span
        className={
          isOnline
            ? css['is-on-line']
            : `${css['is-on-line']} ${css['is-off-line']}`
        }
      ></span>
      <img className={css.avatar} src={avatar} alt="User avatar" />
      <p className={css.username}>{name}</p>
    </li>
  );
};

export default FriendListItem;
