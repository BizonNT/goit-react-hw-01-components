import StatListItem from './StatListItem';

import css from './statlist.module.css';

const StatList = ({ stats }) => {
  const elements = stats.map(({ id, ...other }) => (
    <StatListItem key={id} {...other} />
  ));
  return (
    <ul className={css.statlist}>
      {elements}
    </ul>
  );
};

export default StatList;
