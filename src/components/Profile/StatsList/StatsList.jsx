import StatsListItem from './StatsListItem';

import css from "./statslist.module.css"

const StatsList = ({ stats }) => {
  const elements = Object.entries(stats);
  const items = elements.map(element => (
    <StatsListItem key={element[0]} name={element[0]} value={element[1]} />
  ));
  return <ul className={css.stats}>{items}</ul>;
};

export default StatsList;  

