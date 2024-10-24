import s from './styles.module.scss';

export const ProcessCard: React.FC = () => {
  return (
    <article className={s.processCard}>
      <header>
        <div></div>
        <h3>
          <span>&gt;</span> Healthcare <span>&lt;</span>
        </h3>
      </header>
      <p>
        “Yalantis has been a great fit for us because of their experience,
        responsiveness, value, and time to market. From the very start, they’ve
        been able to staff an effective development team in no time and perform
        as expected.”
      </p>
    </article>
  );
};
