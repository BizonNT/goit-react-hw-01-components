import StatListItem from './StatListItem';

import css from './statlist.module.css';

const StatList = ({ stats }) => {
  const lengthValue = stats.length;
  const elements = stats.map(({ id, ...other }) => (
    <StatListItem key={id} {...other} length={lengthValue} />
  ));
  return <ul className={css.statlist}>{elements}</ul>;
};

export default StatList;
