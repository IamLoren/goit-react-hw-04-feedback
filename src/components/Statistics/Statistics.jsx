import s from './Statistics.module.css';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {

    return (
      <div className={s.statWrap}>
        <p className={s.statField}>Good: {good}</p>
        <p className={s.statField}>Neutral: {neutral}</p>
        <p className={s.statField}>Bad: {bad}</p>
        <p className={s.statField}>Total: {total}</p>
        <p className={s.statField}>
          Positive feedback:{' '}
          {positivePercentage % 1 === 0
            ? positivePercentage
            : positivePercentage.toFixed(2)}
          %
        </p>
   </div>
    );
}
