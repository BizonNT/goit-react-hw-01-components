import { makeFirstLetterToUpperCase } from "../../helpers/makeFirstLetterToUpperCase";

import css from "./statslist.module.css"

const StatsListItem = ({ name, value }) => {
  return (
    <li className={css.item}>
      <span className={css.label}>{makeFirstLetterToUpperCase(name)}</span>
      <span className={css.quantity}>{value}</span>
    </li>
  );
};

export default StatsListItem;
