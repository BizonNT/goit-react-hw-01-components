import { getRandomHexColor } from 'components/helpers/getRandomColor';

import css from './statlist.module.css';

const StatListItem = ({ label, percentage, length }) => {
  let colorValue = getRandomHexColor();
  const color = {
    backgroundColor: `${colorValue}`,
    width: `calc(100%/${length})`,
  };
  return (
    <li className={css.item} style={color}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
  );
};

export default StatListItem;
