import FriendListItem from './FriendListItem';
import css from './friendlist.module.css';

const FriendList = ({ friends }) => {
  const elements = friends.map(({ id, ...friend }) => (
    <FriendListItem key={id} {...friend} />
  ));
  return <ul className={css.friendlist}>{elements}</ul>;
};

export default FriendList;
