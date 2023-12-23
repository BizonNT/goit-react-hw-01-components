import StatList from './StatList/StatList';

import css from './statistics.module.css';

const Statistics = ({ title, stats }) => {

  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <StatList stats={stats} />
    </section>
  );
};

export default Statistics;
