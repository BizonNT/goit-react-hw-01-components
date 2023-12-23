import StatsList from './StatsList/StatsList';

import css from './profile.module.css';

const Profile = ({ avatar, username, tag, location, stats }) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt="User avatar" className={css.avatar} />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
        <StatsList stats={stats} />
      </div>
    </div>
  );
};

export default Profile;
