import { makeFirstLetterToUpperCase } from '../../helpers/makeFirstLetterToUpperCase';

import css from './transactionitem.module.css';

const TransactionItem = ({ amount, currency, type }) => {
  return (
    <tr className={css.row}>
      <td className={css.textleft}>{makeFirstLetterToUpperCase(type)}</td>
      <td className={css.text}>{amount}</td>
      <td className={css.text}>{currency}</td>
    </tr>
  );
};

export default TransactionItem;
