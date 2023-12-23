
import css from "./statslist.module.css"

const StatsListItem = ({ name, value }) => {
  const category = name.toUpperCase().split('').slice(0, 1) + name.split('').slice(1).join('')
  return (
    <li className={css.item}>
      <span className={css.label}>{category}</span>
      <span className={css.quantity}>{value}</span>
    </li>
  );
};

export default StatsListItem;
