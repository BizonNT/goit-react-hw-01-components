import TransactionItem from './TransactionItem/TransactionItem';

import css from './transactionhistory.module.css';

const TransactionHistory = ({ items }) => {
  const elements = items.map(({ id, ...other }) => (
    <TransactionItem key={id} {...other} />
  ));
  return (
    <section className={css.container}>
      <table className={css['transaction-history']}>
        <thead className={css.head}>
          <tr>
            <th className={css.text}>Type</th>
            <th className={css.text}>Amount</th>
            <th className={css.text}>Currency</th>
          </tr>
        </thead>

        <tbody>{elements}</tbody>
      </table>
    </section>
  );
};

export default TransactionHistory;
