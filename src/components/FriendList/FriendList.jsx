import FriendListItem from './FriendListItem';
import css from './friendlist.module.css';

const FriendList = ({ friends }) => {
  const elements = friends.map(({ id, ...friend }) => (
    <FriendListItem key={id} {...friend} />
  ));
  return (
    <section className={css.list}>
      <ul className={css['friend-list']}>{elements}</ul>
    </section>
  );
};

export default FriendList;
