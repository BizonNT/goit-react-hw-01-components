import css from "./statlist.module.css"

const StatListItem = ({label, percentage}) => {
  return (
    <li className={css.item}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
  );
}

export default StatListItem;