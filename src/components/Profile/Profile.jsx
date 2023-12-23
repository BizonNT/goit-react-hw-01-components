import StatsList from './StatsList/StatsList';

import css from './profile.module.css';

const Profile = ({ user }) => {
  return (
    <section className={css.profile}>
      <div className={css.description}>
        <img src={user.avatar} alt="User avatar" className={css.avatar} />
        <p className={css.name}>{user.username}</p>
        <p className={css.tag}>@{user.tag}</p>
        <p className={css.location}>{user.location}</p>
        <StatsList stats={user.stats} />
      </div>
    </section>
  );
};

export default Profile;
